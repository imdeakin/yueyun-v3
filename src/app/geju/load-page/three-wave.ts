/**
 * Created by Deakin on 2017/3/28 0028.
 */
declare let THREE: any;

export class ThreeWave {
  private SEPARATION: number = 100;
  private AMOUNTX: number = 50;
  private AMOUNTY: number = 50;

  private container;
  private camera;
  private scene;
  private renderer;

  private particles;
  private particle;
  private count: number = 0;

  private mouseX: number = -30;
  private mouseY: number = -340;

  private windowHalfX: number = window.innerWidth / 2;
  private windowHalfY: number = window.innerHeight / 2;

  private animationFrameId: number;

  public init(conId): void {
    let $this = this;
    this.container = document.getElementById(conId);
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    this.scene = new THREE.Scene();
    this.particles = new Array();

    let PI2 = Math.PI * 2;
    let material = new THREE.ParticleCanvasMaterial({

      color: 0xffffff,
      program: (context) => {

        context.beginPath();
        context.arc(0, 0, 1, 0, PI2, true);
        context.fill();

      }

    });

    let i = 0;

    for (let ix = 0; ix < this.AMOUNTX; ix++) {

      for (let iy = 0; iy < this.AMOUNTY; iy++) {

        this.particle = this.particles[i++] = new THREE.Particle(material);

        this.particle.position.x = ix * this.SEPARATION -
          (( this.AMOUNTX * this.SEPARATION ) / 2);

        this.particle.position.z = iy * this.SEPARATION -
          (( this.AMOUNTY * this.SEPARATION ) / 2);

        this.scene.add(this.particle);

      }

    }

    this.renderer = new THREE.CanvasRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => $this.onWindowResize, false);

    return this.animate();
  }

  public onWindowResize(): void {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public animate(): void {
    let $this = this;
    this.animationFrameId = requestAnimationFrame(() => {
      $this.animate();
    });
    this.render();
  }

  public render(): void {

    this.camera.position.x += ( this.mouseX - this.camera.position.x ) * .05;
    this.camera.position.y += ( -this.mouseY - this.camera.position.y ) * .05;
    this.camera.lookAt(this.scene.position);

    let i = 0;

    for (let ix = 0; ix < this.AMOUNTX; ix++) {

      for (let iy = 0; iy < this.AMOUNTY; iy++) {

        this.particle = this.particles[i++];

        this.particle.position.y = ( Math.sin(( ix + this.count ) * 0.3) * 50 ) +
          ( Math.sin(( iy + this.count ) * 0.5) * 50 );

        this.particle.scale.x = this.particle.scale.y =
          ( Math.sin(( ix + this.count ) * 0.3) + 1 ) * 2 +
          ( Math.sin(( iy + this.count ) * 0.5) + 1 ) * 2;

      }

    }

    this.renderer.render(this.scene, this.camera);

    this.count += 0.1;
  }

  public destroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }
}
