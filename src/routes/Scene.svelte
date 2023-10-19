<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

	let width = 800;
	let height = 600;

	let canvasContainer: HTMLDivElement;
	let camera: THREE.PerspectiveCamera;
	let scene: THREE.Scene;
	let mesh: THREE.Mesh;
	let model: any;
	let renderer: THREE.WebGLRenderer;

	let mouseX = 0;
	let mouseY = 0;

	function onMouseMove(event) {
		mouseX = (event.clientX - width / 2) / 1000;
		mouseY = (event.clientY - height / 2) / 1000;
	}

	function onResize() {
		width = canvasContainer.clientWidth;
		height = canvasContainer.clientHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize(width, height);
	}

	function animation(time: number) {
		camera.position.x += (mouseX - camera.position.x) * 0.01;
		camera.position.y += (-mouseY - camera.position.y) * 0.01;

		camera.lookAt(scene.position);

		if (model && model.rotation) {
			model.rotation.y += 0.005;
		}
		renderer.render(scene, camera);
	}

	onMount(() => {
		width = canvasContainer.clientWidth;
		height = canvasContainer.clientHeight;
		renderer = new THREE.WebGLRenderer({ alpha: true });
		camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
		camera.position.z = 1;

		const pmremGenerator = new THREE.PMREMGenerator(renderer);

		scene = new THREE.Scene();
		// scene.background = new THREE.Color( 0xbfe3dd );
		scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

		// const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
		// const material = new THREE.MeshNormalMaterial();
		//
		// mesh = new THREE.Mesh(geometry, material);
		// scene.add(mesh);

		// Instantiate a loader
		const loader = new GLTFLoader();

		// Load a glTF resource
		loader.load(
			// resource URL
			'scene.gltf',
			// called when the resource is loaded
			function (gltf) {
				model = gltf.scene;
				model.position.set( 0.5, 0, 0 );
				model.scale.set(0.1, 0.1, 0.1);
        model.rotation.x = 0.5
				scene.add(model);

				gltf.animations; // Array<THREE.AnimationClip>
				gltf.scene; // THREE.Group
				gltf.scenes; // Array<THREE.Group>
				gltf.cameras; // Array<THREE.Camera>
				gltf.asset; // Object
			},
			// called while loading is progressing
			function (xhr) {
				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
			},
			// called when loading has errors
			function (error) {
				console.log('An error happened');
			}
		);

		renderer.setSize(width, height);
		renderer.setAnimationLoop(animation);
		canvasContainer.appendChild(renderer.domElement);

		window.onresize = onResize;
		window.onmousemove = onMouseMove;
	});
</script>

<div bind:this={canvasContainer} class="w-full h-[600px]" />
