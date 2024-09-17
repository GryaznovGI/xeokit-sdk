import { Entity, Plugin, Viewer } from "ct-g-xeokit-viewer/types";
import { DistanceMeasurementsControl } from "./DistanceMeasurementsControl";
import { DistanceMeasurement } from "./DistanceMeasurement";

export declare type DistanceMeasurementsPluginConfiguration = {
  /** Optional ID for this plugin, so that we can find it within {@link Viewer.plugins}. */
  id?: string;
  /** The minimum length, in pixels, of an axis wire beyond which its label is shown. */
  labelMinAxisLength?: number;
  /** Container DOM element for markers and labels. Defaults to ````document.body````. */
  container?: HTMLElement;
  /** The default value of the DistanceMeasurements `visible` property. */
  defaultVisible?: boolean;
  /** The default value of the DistanceMeasurements `originVisible` property. */
  defaultOriginVisible?: boolean;
  /** The default value of the DistanceMeasurements `targetVisible` property. */
  defaultTargetVisible?: boolean;
  /** The default value of the DistanceMeasurements `wireVisible` property. */
  defaultWireVisible?: boolean;
  /** The default value of the DistanceMeasurements `axisVisible` property. */
  defaultAxisVisible?: boolean;
  /** The default color of the length dots, wire and label. */
  defaultColor?: string;
  /** If set, the wires, dots and labels will have this zIndex (+1 for dots and +2 for labels). */
  zIndex?: number;
  /** If set, the X wire will have this color */
  xAxisColor?: string;
  /** If set, the Y wire will have this color */
  yAxisColor?: string;
  /** If set, the Z wire will have this color */
  zAxisColor?: string;
  /** If set, the X wire label will have this color */
  xAxisLabelColor?: string;
  /** If set, the Y wire label will have this color */
  yAxisLabelColor?: string;
  /** If set, the Z wire label will have this color */
  zAxisLabelColor?: string;
  /** If set, the X wire will have this class name */
  xAxisClassName?: string;
  /** If set, the Y wire will have this class name */
  yAxisClassName?: string;
  /** If set, the Z wire will have this class name */
  zAxisClassName?: string;
  /** If set, the X wire label will have this class name */
  xAxisLabelClassName?: string;
  /** If set, the Y wire label will have this class name */
  yAxisLabelClassName?: string;
  /** If set, the Z wire label will have this class name */
  zAxisLabelClassName?: string;
};

/**
 * {@link Viewer} plugin for measuring point-to-point distances.
 */
export declare class DistanceMeasurementsPlugin extends Plugin {
  /**
   * @constructor
   * @param {Viewer} viewer The Viewer.
   * @param {DistanceMeasurementsPluginConfiguration} [cfg]  Plugin configuration.
   */
  constructor(viewer: Viewer, cfg?: DistanceMeasurementsPluginConfiguration);
  
  /**
   * Sets the minimum length, in pixels, of an axis wire beyond which its label is shown.
   *
   * The axis wire's label is not shown when its length is less than this value.
   *
   * This is ````25```` pixels by default.
   *
   * Must not be less than ````1````.
   *
   * @type {number}
   */
  set labelMinAxisLength(arg: number);

  /**
   * Gets the minimum length, in pixels, of an axis wire beyond which its label is shown.
   * @returns {number}
   */
  get labelMinAxisLength(): number;
  
  /**
   * Gets the {@link DistanceMeasurementsControl}, which creates {@link DistanceMeasurement}s from user input.
   *
   * @type {DistanceMeasurementsControl}
   */
  get control(): DistanceMeasurementsControl;

  /**
   * Gets the existing {@link DistanceMeasurement}s, each mapped to its {@link DistanceMeasurement.id}.
   *
   * @type {{String:DistanceMeasurement}}
   */
  get measurements(): { [key:string]: DistanceMeasurement };

  /**
   * Creates a {@link DistanceMeasurement}.
   *
   * The DistanceMeasurement is then registered by {@link DistanceMeasurement.id} in {@link DistanceMeasurementsPlugin.measurements}.
   *
   * @param {Object} params {@link DistanceMeasurement} configuration.
   * @param {String} params.id Unique ID to assign to {@link DistanceMeasurement.id}. The DistanceMeasurement will be registered by this in {@link DistanceMeasurementsPlugin.measurements} and {@link Scene.components}. Must be unique among all components in the {@link Viewer}.
   * @param {Number[]} params.origin.worldPos Origin World-space 3D position.
   * @param {Entity} params.origin.entity Origin Entity.
   * @param {Number[]} params.target.worldPos Target World-space 3D position.
   * @param {Entity} params.target.entity Target Entity.
   * @param {Boolean} [params.visible=true] Whether to initially show the {@link DistanceMeasurement}.
   * @param {Boolean} [params.originVisible=true] Whether to initially show the {@link DistanceMeasurement} origin.
   * @param {Boolean} [params.targetVisible=true] Whether to initially show the {@link DistanceMeasurement} target.
   * @param {Boolean} [params.wireVisible=true] Whether to initially show the direct point-to-point wire between {@link DistanceMeasurement.origin} and {@link DistanceMeasurement.target}.
   * @param {Boolean} [params.axisVisible=true] Whether to initially show the axis-aligned wires between {@link DistanceMeasurement.origin} and {@link DistanceMeasurement.target}.
   * @param {string} [params.color] The color of the length dot, wire and label.
   * @param {string} [params.xAxisColor] The color of the X axis wire.
   * @param {string} [params.yAxisColor] The color of the Y axis wire.
   * @param {string} [params.zAxisColor] The color of the Z axis wire.
   * @param {string} [params.xAxisLabelColor] The color of the X axis label.
   * @param {string} [params.yAxisLabelColor] The color of the Y axis label.
   * @param {string} [params.zAxisLabelColor] The color of the Z axis label.
   * @param {string} [params.xAxisClassName] The class name of the X axis wire.
   * @param {string} [params.yAxisClassName] The class name of the Y axis wire.
   * @param {string} [params.zAxisClassName] The class name of the Z axis wire.
   * @param {string} [params.xAxisLabelClassName] The class name of the X axis label.
   * @param {string} [params.yAxisLabelClassName] The class name of the Y axis label.
   * @param {string} [params.zAxisLabelClassName] The class name of the Z axis label.
   * @returns {DistanceMeasurement} The new {@link DistanceMeasurement}.
   */
  createMeasurement(params?: {
      id: string;
      origin: {
        entity: Entity;
        worldPos: number[];
      };
      target: {
        entity: Entity;
        worldPos: number[];
      };
      visible?: boolean;
      originVisible?: boolean;
      targetVisible?: boolean;
      wireVisible?: boolean;
      axisVisible?: boolean;
      color?: string;
      xAxisColor?: string;
      yAxisColor?: string;
      zAxisColor?: string;
      xAxisLabelColor?: string;
      yAxisLabelColor?: string;
      zAxisLabelColor?: string;
      xAxisClassName?: string;
      yAxisClassName?: string;
      zAxisClassName?: string;
      xAxisLabelClassName?: string;
      yAxisLabelClassName?: string;
      zAxisLabelClassName?: string;
  }): DistanceMeasurement;
  
  /**
   * Destroys a {@link DistanceMeasurement}.
   *
   * @param {String} id ID of DistanceMeasurement to destroy.
   */
  destroyMeasurement(id: string): void;

  /**
   * Destroys all {@link DistanceMeasurement}s.
   */
  clear(): void;

  /**
   * Fires when a measurement lifecycle event is happened.
   * @param {String} event The event
   * @param {Function} callback Callback fired on the event
   * @return {String} Handle to the subscription, which may be used to unsubscribe with {@link #off}.
   */
  on(event: "measurementCreated" | "measurementDestroyed", callback: (measurement: DistanceMeasurement)=> void): string;

  /**
   * Fires when a mouse event is happened on measurement.
   * @param {String} event The event
   * @param {Function} callback Callback fired on the event
   * @return {String} Handle to the subscription, which may be used to unsubscribe with {@link #off}.
   */
  on(event: "mouseOver" | "mouseLeave" | "contextMenu", callback: ({ event, measurement }: { event: MouseEvent, measurement: DistanceMeasurement })=> void): string;

  /**
   * Cancels an event subscription that was previously made with {@link #on}.
   * @param {String} subId Subscription ID
   */
  off(subId: string): void;
}
