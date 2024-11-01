<script>
  import { onMount } from "svelte";
  export let percent;

  let flakes = [];

  /*onMount(() => {
		var getV = function () {
			return 5 * (Math.random() - 0.5);
		};

		function Flake() {
			this._node = document.createElement('div');
			this._node.className = 'flake';

			this._vec = { x: getV(), y: getV() };
			this._pos = { x: this._vec.x * 40, y: this._vec.y * 40 - 10 };

			this._scale = 2 + Math.random();
			this._scale = Math.max(0, this._scale - 0.03 * 60);

			if (this._pos.x * this._pos.x + this._pos.y * this._pos.y < 8000) {
				this._render();
			}
		}

		Flake.prototype = {
			getNode: function () {
				return this._node;
			},

			update: function () {
				if (!this._pos) {
					this._pos = { x: 0, y: 0 };
					this._vec = { x: getV(), y: getV() };
					this._scale = 2 + Math.random();
				}

				this._vec.y += 0.05;
				this._pos.x += this._vec.x;
				this._pos.y += this._vec.y;
				this._scale = Math.max(0, this._scale - 0.035);
				this._render();

				if (this._pos.x * this._pos.x + this._pos.y * this._pos.y > 100000) {
					this._pos = null;
				}
			},

			_render: function () {
				var transform =
					'translate3d(' + this._pos.x + 'px,' + this._pos.y + 'px,0) scale(' + this._scale + ')';

				this._node.style['msTransform'] = transform;
				this._node.style['--webkitTransform'] = transform;
				this._node.style['MozTransform'] = transform;
				this._node.style['OTransform'] = transform;
				this._node.style['transform'] = transform;
				this._node.style['filter'] = 'blur(0px)';
				this._node.style.background = 'radial-gradient(var(--primary))';
				this._node.style.zIndex = 100000;
				this._node.style.position = 'absolute';
				this._node.style.height = '0.25rem';
				this._node.style.width = '0.25rem';
				this._node.color = 'Yellow';
			},
		};

		const MAX_FLAKES = 100;
		const orb = document.querySelector('.orb');
		flakes = new Array(MAX_FLAKES);
		let flake;

		for (let i = 0; i < MAX_FLAKES; i++) {
			flake = new Flake();
			const node = flake.getNode();
			orb.appendChild(node);
			flakes[i] = flake;
		}

		const tick = function () {
			for (let i = 0; i < MAX_FLAKES; i++) {
				flake = flakes[i];
				flake.update();
			}

			requestAnimationFrame(function () {
				tick();
			});
		};

		setTimeout(() => {
			tick();
		}, 250);
	});*/
</script>

<div class="orb">
  <!--<div class="flake"></div>-->
</div>

<style lang="scss">
  @keyframes glow {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.125);
    }
  }

  .orb {
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    background: radial-gradient(#fff, var(--primary));
    border-radius: 50%;
    filter: blur(5px);

    &::after,
    &::before {
      position: absolute;
      animation-name: glow;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      top: 50%;
      left: 50%;
      content: "";
      background: radial-gradient(
        ellipse at center,
        rgba(240, 255, 255, 0.05) 0%,
        rgba(240, 255, 255, 0) 50%
      );
    }

    &::after {
      animation-duration: 1s;
      width: 40rem;
      height: 0.5rem;
      margin-left: -20rem;
      margin-top: -0.25rem;
    }

    &::before {
      animation-duration: 0.25s;
      width: 20rem;
      height: 2rem;
      margin-left: -10rem;
      margin-top: -1rem;
    }
  }

  .flake {
    position: absolute;
    left: 50%;
    top: 50%;
    background: #fff;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: -0.125rem;
    margin-left: -0.125rem;
    border-radius: 50%;
    border: 3px solid white;
  }
</style>
