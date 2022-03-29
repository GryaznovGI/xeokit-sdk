import { Component } from '../Component';
// import { PickController } from './lib/controllers/PickController.js';
// import { PanController } from './lib/controllers/PanController.js';
// import { MousePanRotateDollyHandler } from './lib/handlers/MousePanRotateDollyHandler.js';
// import { KeyboardAxisViewHandler } from './lib/handlers/KeyboardAxisViewHandler.js';
// import { MousePickHandler } from './lib/handlers/MousePickHandler.js';
// import { KeyboardPanRotateDollyHandler } from './lib/handlers/KeyboardPanRotateDollyHandler.js';
// import { MouseMiscHandler } from './lib/handlers/MouseMiscHandler.js';
// import { TouchPanRotateAndDollyHandler } from './lib/handlers/TouchPanRotateAndDollyHandler.js';
// import { TouchPickHandler } from './lib/handlers/TouchPickHandler.js';

/**
 * Controls the {@link Camera} with user input, and fires events when the user interacts with pickable {@link Entity}s.
 */
export declare class CameraControl extends Component {
  PAN_LEFT: number;
  PAN_RIGHT: number;
  PAN_UP: number;
  PAN_DOWN: number;
  PAN_FORWARDS: number;
  PAN_BACKWARDS: number;
  ROTATE_X_POS: number;
  ROTATE_X_NEG: number;
  ROTATE_Y_POS: number;
  ROTATE_Y_NEG: number;
  DOLLY_FORWARDS: number;
  DOLLY_BACKWARDS: number;
  AXIS_VIEW_RIGHT: number;
  AXIS_VIEW_BACK: number;
  AXIS_VIEW_LEFT: number;
  AXIS_VIEW_FRONT: number;
  AXIS_VIEW_TOP: number;
  AXIS_VIEW_BOTTOM: number;

  /**
   * Sets the current navigation mode.
   *
   * Accepted values are:
   *
   * * "orbit" - rotation orbits about the current target or pivot point,
   * * "firstPerson" - rotation is about the current eye position,
   * * "planView" - rotation is disabled.
   *
   * See class comments for more info.
   *
   * @param {String} navMode The navigation mode.
   */
  set navMode(arg: 'orbit' | 'firstPerson' | 'planView');

  /**
   * Gets the current navigation mode.
   *
   * @returns {String} The navigation mode
   */
  get navMode(): 'orbit' | 'firstPerson' | 'planView';

  /**
   * Sets whether to vertically constrain the {@link Camera} position for first-person navigation.
   *
   * When set ````true````, this constrains {@link Camera#eye} to its current vertical position.
   *
   * Only applies when {@link CameraControl#navMode} is ````"firstPerson"````.
   *
   * Default is ````false````.
   *
   * @param {Boolean} value Set ````true```` to vertically constrain the Camera.
   */
  set constrainVertical(arg: boolean);

  /**
   * Gets whether to vertically constrain the {@link Camera} position for first-person navigation.
   *
   * When set ````true````, this constrains {@link Camera#eye} to its current vertical position.
   *
   * Only applies when {@link CameraControl#navMode} is ````"firstPerson"````.
   *
   * Default is ````false````.
   *
   * @returns {Boolean} ````true```` when Camera is vertically constrained.
   */
  get constrainVertical(): boolean;

  /**
   * Sets custom mappings of keys to ````CameraControl```` actions.
   *
   * See class docs for usage.
   *
   * @param {{Number:Number}|String} value Either a set of new key mappings, or a string to select a keyboard layout,
   * which causes ````CameraControl```` to use the default key mappings for that layout.
   */
  set keyMap(arg: {
    Number: number;
  });

  /**
   * Gets custom mappings of keys to {@link CameraControl} actions.
   *
   * @returns {{Number:Number}} Current key mappings.
   */
  get keyMap(): {
    Number: number;
  };

  /**
   * Sets whether double-picking an {@link Entity} causes the {@link Camera} to fly to its boundary.
   *
   * Default is ````false````.
   *
   * @param {Boolean} value Set ````true```` to enable double-pick-fly-to mode.
   */
  set doublePickFlyTo(arg: boolean);

  /**
   * Gets whether double-picking an {@link Entity} causes the {@link Camera} to fly to its boundary.
   *
   * Default is ````false````.
   *
   * @returns {Boolean} Returns ````true```` when double-pick-fly-to mode is enabled.
   */
  get doublePickFlyTo(): boolean;

  /**
   * Sets whether either right-clicking (true) or middle-clicking (false) pans the {@link Camera}.
   *
   * Default is ````true````.
   *
   * @param {Boolean} value Set ````false```` to disable pan on right-click.
   */
  set panRightClick(arg: boolean);

  /**
   * Gets whether right-clicking pans the {@link Camera}.
   *
   * Default is ````true````.
   *
   * @returns {Boolean} Returns ````false```` when pan on right-click is disabled.
   */
  get panRightClick(): boolean;

  /**
   *  Sets if this ````CameraControl```` is active or not.
   *
   * When inactive, the ````CameraControl```` will not react to input.
   *
   * Default is ````true````.
   *
   * @param {Boolean} value Set ````true```` to activate this ````CameraControl````.
   */
  set active(arg: boolean);

  /**
   * Gets if this ````CameraControl```` is active or not.
   *
   * When inactive, the ````CameraControl```` will not react to input.
   *
   * Default is ````true````.
   *
   * @returns {Boolean} Returns ````true```` if this ````CameraControl```` is active.
   */
  get active(): boolean;

  /**
   * Sets whether the {@link Camera} follows the mouse/touch pointer.
   *
   * In orbiting mode, the Camera will orbit about the pointer, and will dolly to and from the pointer.
   *
   * In fly-to mode, the Camera will dolly to and from the pointer, however the World will always rotate about the Camera position.
   *
   * In plan-view mode, the Camera will dolly to and from the pointer, however the Camera will not rotate.
   *
   * Default is ````true````.
   *
   * See class comments for more info.
   *
   * @param {Boolean} value Set ````true```` to enable the Camera to follow the pointer.
   */
  set followPointer(arg: boolean);

  /**
   * Sets whether the {@link Camera} follows the mouse/touch pointer.
   *
   * In orbiting mode, the Camera will orbit about the pointer, and will dolly to and from the pointer.
   *
   * In fly-to mode, the Camera will dolly to and from the pointer, however the World will always rotate about the Camera position.
   *
   * In plan-view mode, the Camera will dolly to and from the pointer, however the Camera will not rotate.
   *
   * Default is ````true````.
   *
   * See class comments for more info.
   *
   * @returns {Boolean} Returns ````true```` if the Camera follows the pointer.
   */
  get followPointer(): boolean;

  /**
   * Sets a factor in range ````[0..1]```` indicating how much the {@link Camera} keeps moving after you finish rotating it.
   *
   * A value of ````0.0```` causes it to immediately stop, ````0.5```` causes its movement to decay 50% on each tick,
   * while ````1.0```` causes no decay, allowing it continue moving, by the current rate of rotation.
   *
   * You may choose an inertia of zero when you want be able to precisely rotate the Camera,
   * without interference from inertia. Zero inertia can also mean that less frames are rendered while
   * you are rotating the Camera.
   *
   * Default is ````0.0````.
   *
   * Does not apply when {@link CameraControl#navMode} is ````"planView"````, which disallows rotation.
   *
   * @param {Number} rotationInertia New inertial factor.
   */
  set rotationInertia(arg: number);

  /**
   * Gets the rotation inertia factor.
   *
   * Default is ````0.0````.
   *
   * Does not apply when {@link CameraControl#navMode} is ````"planView"````, which disallows rotation.
   *
   * @returns {Number} The inertia factor.
   */
  get rotationInertia(): number;

  /**
   * Sets how much the {@link Camera} pans each second with keyboard input.
   *
   * Default is ````5.0````, to pan the Camera ````5.0```` World-space units every second that
   * a panning key is depressed. See the ````CameraControl```` class documentation for which keys control
   * panning.
   *
   * Panning direction is aligned to our Camera's orientation. When we pan horizontally, we pan
   * to our left and right, when we pan vertically, we pan upwards and downwards, and when we pan forwards
   * and backwards, we pan along the direction the Camera is pointing.
   *
   * Unlike dollying when {@link followPointer} is ````true````, panning does not follow the pointer.
   *
   * @param {Number} keyboardPanRate The new keyboard pan rate.
   */
  set keyboardPanRate(arg: number);

  /**
   * Gets how much the {@link Camera} pans each second with keyboard input.
   *
   * Default is ````5.0````.
   *
   * @returns {Number} The current keyboard pan rate.
   */
  get keyboardPanRate(): number;

  /**
   * Sets how fast the camera pans on touch panning
   *
   * @param {Number} touchPanRate The new touch pan rate.
   */
  set touchPanRate(arg: number);

  /**
   * Gets how fast the {@link Camera} pans on touch panning
   *
   * Default is ````1.0````.
   *
   * @returns {Number} The current touch pan rate.
   */
  get touchPanRate(): number;

  /**
   * Sets how many degrees per second the {@link Camera} rotates/orbits with keyboard input.
   *
   * Default is ````90.0````, to rotate/orbit the Camera ````90.0```` degrees every second that
   * a rotation key is depressed. See the ````CameraControl```` class documentation for which keys control
   * rotation/orbit.
   *
   * @param {Number} keyboardRotationRate The new keyboard rotation rate.
   */
  set keyboardRotationRate(arg: number);

  /**
   * Sets how many degrees per second the {@link Camera} rotates/orbits with keyboard input.
   *
   * Default is ````90.0````.
   *
   * @returns {Number} The current keyboard rotation rate.
   */
  get keyboardRotationRate(): number;

  /**
   * Sets the current drag rotation rate.
   *
   * This configures how many degrees the {@link Camera} rotates/orbits for a full sweep of the canvas by mouse or touch dragging.
   *
   * For example, a value of ````360.0```` indicates that the ````Camera```` rotates/orbits ````360.0```` degrees horizontally
   * when we sweep the entire width of the canvas.
   *
   * ````CameraControl```` makes vertical rotation half as sensitive as horizontal rotation, so that we don't tend to
   * flip upside-down. Therefore, a value of ````360.0```` rotates/orbits the ````Camera```` through ````180.0```` degrees
   * vertically when we sweep the entire height of the canvas.
   *
   * Default is ````360.0````.
   *
   * @param {Number} dragRotationRate The new drag rotation rate.
   */
  set dragRotationRate(arg: number);

  /**
   * Gets the current drag rotation rate.
   *
   * Default is ````360.0````.
   *
   * @returns {Number} The current drag rotation rate.
   */
  get dragRotationRate(): number;

  /**
   * Sets how much the {@link Camera} dollys with touch input.
   *
   * Default is ````0.2````
   *
   * @param {Number} touchDollyRate The new touch dolly rate.
   */
  set touchDollyRate(arg: number);

  /**
   * Gets how much the {@link Camera} dollys each second with touch input.
   *
   * Default is ````0.2````.
   *
   * @returns {Number} The current touch dolly rate.
   */
  get touchDollyRate(): number;

  /**
   * Sets the dolly inertia factor.
   *
   * This factor configures how much the {@link Camera} keeps moving after you finish dollying it.
   *
   * This factor is a value in range ````[0..1]````. A value of ````0.0```` causes dollying to immediately stop,
   * ````0.5```` causes dollying to decay 50% on each animation frame, while ````1.0```` causes no decay, which allows dollying
   * to continue until further input stops it.
   *
   * You might set ````dollyInertia```` to zero when you want be able to precisely position or rotate the Camera,
   * without interference from inertia. This also means that xeokit renders less frames while dollying the Camera,
   * which can improve rendering performance.
   *
   * Default is ````0````.
   *
   * @param {Number} dollyInertia New dolly inertia factor.
   */
  set dollyInertia(arg: number);

  /**
   * Gets the dolly inertia factor.
   *
   * Default is ````0````.
   *
   * @returns {Number} The current dolly inertia factor.
   */
  get dollyInertia(): number;

  /**
   * Sets the proximity to the closest object below which dolly speed decreases, and above which dolly speed increases.
   *
   * Default is ````35.0````.
   *
   * @param {Number} dollyProximityThreshold New dolly proximity threshold.
   */
  set dollyProximityThreshold(arg: number);

  /**
   * Gets the proximity to the closest object below which dolly speed decreases, and above which dolly speed increases.
   *
   * Default is ````35.0````.
   *
   * @returns {Number} The current dolly proximity threshold.
   */
  get dollyProximityThreshold(): number;

  /**
   * Sets the minimum dolly speed.
   *
   * Default is ````0.04````.
   *
   * @param {Number} dollyMinSpeed New dolly minimum speed.
   */
  set dollyMinSpeed(arg: number);

  /**
   * Gets the minimum dolly speed.
   *
   * Default is ````0.04````.
   *
   * @returns {Number} The current minimum dolly speed.
   */
  get dollyMinSpeed(): number;

  /**
   * Sets the pan inertia factor.
   *
   * This factor configures how much the {@link Camera} keeps moving after you finish panning it.
   *
   * This factor is a value in range ````[0..1]````. A value of ````0.0```` causes panning to immediately stop,
   * ````0.5```` causes panning to decay 50% on each animation frame, while ````1.0```` causes no decay, which allows panning
   * to continue until further input stops it.
   *
   * You might set ````panInertia```` to zero when you want be able to precisely position or rotate the Camera,
   * without interference from inertia. This also means that xeokit renders less frames while panning the Camera,
   * wich can improve rendering performance.
   *
   * Default is ````0.5````.
   *
   * @param {Number} panInertia New pan inertia factor.
   */
  set panInertia(arg: number);

  /**
   * Gets the pan inertia factor.
   *
   * Default is ````0.5````.
   *
   * @returns {Number} The current pan inertia factor.
   */
  get panInertia(): number;

  /**
   * Sets whether mouse and touch input is enabled.
   *
   * Default is ````true````.
   *
   * Disabling mouse and touch input on ````CameraControl```` is useful when we want to temporarily use mouse or
   * touch input to interact with some other 3D control, without disturbing the {@link Camera}.
   *
   * @param {Boolean} value Set ````true```` to enable mouse and touch input.
   */
  set pointerEnabled(arg: boolean);

  /**
   * Gets whether mouse and touch input is enabled.
   *
   * Default is ````true````.
   *
   * Disabling mouse and touch input on ````CameraControl```` is desirable when we want to temporarily use mouse or
   * touch input to interact with some other 3D control, without interfering with the {@link Camera}.
   *
   * @returns {Boolean} Returns ````true```` if mouse and touch input is enabled.
   */
  get pointerEnabled(): boolean;

  /**
   * Sets how much the {@link Camera} dollys each second with keyboard input.
   *
   * Default is ````15.0````, to dolly the {@link Camera} ````15.0```` World-space units per second while we hold down
   * the ````+```` and ````-```` keys.
   *
   * @param {Number} keyboardDollyRate The new keyboard dolly rate.
   */
  set keyboardDollyRate(arg: number);

  /**
   * Gets how much the {@link Camera} dollys each second with keyboard input.
   *
   * Default is ````15.0````.
   *
   * @returns {Number} The current keyboard dolly rate.
   */
  get keyboardDollyRate(): number;

  /**
   * Sets how much the {@link Camera} dollys each second while the mouse wheel is spinning.
   *
   * Default is ````100.0````, to dolly the {@link Camera} ````10.0```` World-space units per second as we spin
   * the mouse wheel.
   *
   * @param {Number} mouseWheelDollyRate The new mouse wheel dolly rate.
   */
  set mouseWheelDollyRate(arg: number);

  /**
   * Gets how much the {@link Camera} dollys each second while the mouse wheel is spinning.
   *
   * Default is ````100.0````.
   *
   * @returns {Number} The current mouseWheel dolly rate.
   */
  get mouseWheelDollyRate(): number;

  /**
   * Returns true if any keys configured for the given action are down.
   * @param action
   * @param keyDownMap
   * @private
   */
  private _isKeyDownForAction;

  /**
   * Sets the HTMl element to represent the pivot point when {@link CameraControl#followPointer} is true.
   *
   * See class comments for an example.
   *
   * @param {HTMLElement} element HTML element representing the pivot point.
   */
  set pivotElement(arg: HTMLElement);

  /**
   * Sets the current World-space 3D target position.
   *
   * Only applies when {@link CameraControl#followPointer} is ````true````.
   *
   * @param {Number[]} worldPos The new World-space 3D target position.
   */
  set pivotPos(arg: number[]);

  /**
   * Gets the current World-space 3D pivot position.
   *
   * Only applies when {@link CameraControl#followPointer} is ````true````.
   *
   * @return {Number[]} worldPos The current World-space 3D pivot position.
   */
  get pivotPos(): number[];

  /**
   * @deprecated
   * @param {Boolean} value Set ````true```` to enable dolly-to-pointer behaviour.
   */
  set dollyToPointer(arg: boolean);

  /**
   * @deprecated
   * @returns {Boolean} Returns ````true```` if dolly-to-pointer behaviour is enabled.
   */
  get dollyToPointer(): boolean;

  /**
   * @deprecated
   * @param {Boolean} value Set ````true```` to enable dolly-to-pointer behaviour.
   */
  set panToPointer(arg: boolean);

  /**
   * @deprecated
   * @returns {Boolean} Returns ````true```` if dolly-to-pointer behaviour is enabled.
   */
  get panToPointer(): boolean;

  /**
   * Sets whether this ````CameraControl```` is in first-person mode.
   *
   * In "first person" mode (disabled by default) the look position rotates about the eye position. Otherwise,  {@link Camera#eye} rotates about {@link Camera#look}.
   *
   * Default is ````false````.
   *
   * Deprecated - use {@link CameraControl#navMode} instead.
   *
   * @param {Boolean} value Set ````true```` to enable first-person mode.
   * @deprecated
   */
  set firstPerson(arg: boolean);

  /**
   * Gets whether this ````CameraControl```` is in first-person mode.
   *
   * In "first person" mode (disabled by default) the look position rotates about the eye position. Otherwise,  {@link Camera#eye} rotates about {@link Camera#look}.
   *
   * Default is ````false````.
   *
   * Deprecated - use {@link CameraControl#navMode} instead.
   *
   * @returns {Boolean} Returns ````true```` if first-person mode is enabled.
   * @deprecated
   */
  get firstPerson(): boolean;

  /**
   * Sets whether smart default pivoting is enabled.
   *
   * When ````true````, we'll pivot by default about the 3D position of the mouse/touch pointer on an
   * imaginary sphere that's centered at {@link Camera#eye} and sized to the {@link Scene} boundary.
   *
   * When ````false````, we'll pivot by default about {@link Camera#look}.
   *
   * Default is ````false````.
   *
   * @param {Boolean} enabled Set ````true```` to pivot by default about the selected point on the virtual sphere, or ````false```` to pivot by default about {@link Camera#look}.
   */
  set smartPivot(arg: boolean);

  /**
   * Gets whether smart default pivoting is enabled.
   *
   * When ````true````, we'll pivot by default about the 3D position of the mouse/touch pointer on an
   * imaginary sphere that's centered at {@link Camera#eye} and sized to the {@link Scene} boundary.
   *
   * When ````false````, we'll pivot by default about {@link Camera#look}.
   *
   * Default is ````false````.
   *
   * @returns {Boolean} Returns ````true```` when pivoting by default about the selected point on the virtual sphere, or ````false```` when pivoting by default about {@link Camera#look}.
   */
  get smartPivot(): boolean;
}
