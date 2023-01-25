import { Component } from '../Component';

export declare type ImagePlaneConfiguration = {
    /** Optional ID, unique among all components in the parent {@link Scene}, generated automatically when omitted. */
    id?: string;
    /** Indicates whether or not this ````ImagePlane```` is visible. */
    visible?: boolean;
    /** Indicates whether or not the grid is visible.  Grid is only visible when ````ImagePlane```` is also visible. */
    gridVisible?: boolean;
    /** World-space position of the ````ImagePlane````. */
    position?: number[];
    /** World-space size of the longest edge of the ````ImagePlane````. Note that
     ````ImagePlane```` sets its aspect ratio to match its image. If we set a value of ````1000````, and the image
     has size ````400x300````, then the ````ImagePlane```` will then have size ````1000 x 750````. */
    size?: number;
    /** Local rotation of the ````ImagePlane````, as Euler angles given in degrees, for each of the X, Y and Z axis. */
    rotation?: number[];
    /** Modelling transform matrix for the ````ImagePlane````. Overrides the ````position````, ````size```, ````rotation```` and ````dir```` parameters. */
    matrix?: number[];
    /** Indicates if the ````ImagePlane```` is initially included in boundary calculations. */
    collidable?: boolean;
    /** Indicates if the ````ImagePlane```` is initially clippable. */
    clippable?: boolean;
    /** Indicates if the ````ImagePlane```` is initially pickable. */
    pickable?: boolean;
    /** ````ImagePlane````'s initial opacity factor, multiplies by the rendered fragment alpha. */
    opacity?: number;
    /** URL of image. Accepted file types are PNG and JPEG. */
    src: string;
    /** An ````HTMLImageElement```` to source the image from. Overrides ````src````. */
    image?: HTMLImageElement;
}

/**
 *  @desc A plane-shaped 3D object containing a bitmap image.
 */
export declare class ImagePlane extends Component {

    /**
     * @constructor
     * @param {Component} [owner]  Owner component. When destroyed, the owner will destroy this ````ImagePlane```` as well.
     * @param {ImagePlaneConfiguration} [cfg]  ````ImagePlane```` configuration
     */
    constructor(owner?: Component, cfg?: ImagePlaneConfiguration);

    /**
     * Sets if this ````ImagePlane```` is visible or not.
     *
     * Default value is ````true````.
     *
     * @param {Boolean} visible Set ````true```` to make this ````ImagePlane```` visible.
     */
    set visible(visible: boolean);

    /**
     * Gets if this ````ImagePlane```` is visible or not.
     *
     * Default value is ````true````.
     *
     * @returns {Boolean} Returns ````true```` if visible.
     */
    get visible(): boolean;

    /**
     * Sets if this ````ImagePlane````'s grid  is visible or not.
     *
     * Default value is ````false````.
     *
     * Grid is only visible when ````ImagePlane```` is also visible.
     *
     * @param {Boolean} visible Set ````true```` to make this ````ImagePlane````'s grid visible.
     */
    set gridVisible(visible: boolean);

    /**
     * Gets if this ````ImagePlane````'s grid is visible or not.
     *
     * Default value is ````false````.
     *
     * @returns {Boolean} Returns ````true```` if visible.
     */
    get gridVisible(): boolean;

    /**
     * Sets an ````HTMLImageElement```` to source the image from.
     *
     * Sets {@link Texture#src} null.
     *
     * @type {HTMLImageElement}
     */
    set image(image: HTMLImageElement);

    /**
     * Gets the ````HTMLImageElement```` the ````ImagePlane````'s image is sourced from, if set.
     *
     * Returns null if not set.
     *
     * @type {HTMLImageElement}
     */
    get image(): HTMLImageElement;

    /**
     * Sets an image file path that the ````ImagePlane````'s image is sourced from.
     *
     * Accepted file types are PNG and JPEG.
     *
     * Sets {@link Texture#image} null.
     *
     * @type {String}
     */
    set src(src: string);

    /**
     * Gets the image file path that the ````ImagePlane````'s image is sourced from, if set.
     *
     * Returns null if not set.
     *
     * @type {String}
     */
    get src(): string;

    /**
     * Sets the World-space position of this ````ImagePlane````.
     *
     * Default value is ````[0, 0, 0]````.
     *
     * @param {Number[]} value New position.
     */
    set position(value: number[]);

    /**
     * Gets the World-space position of this ````ImagePlane````.
     *
     * Default value is ````[0, 0, 0]````.
     *
     * @returns {Number[]} Current position.
     */
    get position(): number[];

    /**
     * Sets the direction of this ````ImagePlane```` using Euler angles.
     *
     * Default value is ````[0, 0, 0]````.
     *
     * @param {Number[]} value Euler angles for ````X````, ````Y```` and ````Z```` axis rotations.
     */
    set rotation(value: number[]);

    /**
     * Gets the direction of this ````ImagePlane```` as Euler angles.
     *
     * @returns {Number[]} Euler angles for ````X````, ````Y```` and ````Z```` axis rotations.
     */
    get rotation(): number[];

    /**
     * Sets the World-space size of the longest edge of the ````ImagePlane````.
     *
     * Note that ````ImagePlane```` sets its aspect ratio to match its image. If we set a value of ````1000````, and
     * the image has size ````400x300````, then the ````ImagePlane```` will then have size ````1000 x 750````.
     *
     * Default value is ````1.0````.
     *
     * @param {Number} size New World-space size of the ````ImagePlane````.
     */
    set size(size: number);

    /**
     * Gets the World-space size of the longest edge of the ````ImagePlane````.
     *
     * Returns {Number} World-space size of the ````ImagePlane````.
     */
    get size(): number;

    /**
     * Sets the direction of this ````ImagePlane```` as a direction vector.
     *
     * Default value is ````[0, 0, -1]````.
     *
     * @param {Number[]} dir New direction vector.
     */
    set dir(dir: number[]);

    /**
     * Gets the direction of this ````ImagePlane```` as a direction vector.
     *
     * @returns {Number[]} value Current direction.
     */
    get dir(): number[];

    /**
     * Sets if this ````ImagePlane```` is included in boundary calculations.
     *
     * Default is ````true````.
     *
     * @type {Boolean}
     */
    set collidable(value: boolean);

    /**
     * Gets if this ````ImagePlane```` is included in boundary calculations.
     *
     * Default is ````true````.
     *
     * @type {Boolean}
     */
    get collidable(): boolean;

    /**
     * Sets if this ````ImagePlane```` is clippable.
     *
     * Clipping is done by the {@link SectionPlane}s in {@link Scene#sectionPlanes}.
     *
     * Default is ````true````.
     *
     * @type {Boolean}
     */
    set clippable(value: boolean);

    /**
     * Gets if this ````ImagePlane````  is clippable.
     *
     * Clipping is done by the {@link SectionPlane}s in {@link Scene#sectionPlanes}.
     *
     * Default is ````true````.
     *
     * @type {Boolean}
     */
    get clippable(): boolean;

    /**
     * Sets if this ````ImagePlane```` is pickable.
     *
     * Default is ````true````.
     *
     * @type {Boolean}
     */
    set pickable(value: boolean);

    /**
     * Gets if this ````ImagePlane````  is pickable.
     *
     * Default is ````true````.
     *
     * @type {Boolean}
     */
    get pickable(): boolean;

    /**
     * Sets the opacity factor for this ````ImagePlane````.
     *
     * This is a factor in range ````[0..1]```` which multiplies by the rendered fragment alphas.
     *
     * @type {Number}
     */
    set opacity(opacity: number);

    /**
     * Gets this ````ImagePlane````'s opacity factor.
     *
     * This is a factor in range ````[0..1]```` which multiplies by the rendered fragment alphas.
     *
     * @type {Number}
     */
    get opacity(): number;

    /**
     * @destroy
     */
    destroy(): void;
}
