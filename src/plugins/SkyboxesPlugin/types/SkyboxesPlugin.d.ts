import { Plugin, Viewer } from "ct-g-xeokit-viewer/types";

/**
 * {@link Viewer} plugin that manages skyboxes
 */
export declare class SkyboxesPlugin extends Plugin {
  /**
   * @constructor
   * @param {Viewer} viewer The Viewer.
   */
  constructor(viewer: Viewer);
  
  /**
   * Creates a skybox.
   * @param {String} id Unique ID to assign to the skybox.
   * @param {Object} params Skybox configuration.
   * @param {String} [params.src=null] Path to skybox texture
   * @param {String} [params.encoding="linear"] Texture encoding format.  See the {@link Texture#encoding} property for more info.
   * @param {Number} [params.size=1000] Size of this Skybox, given as the distance from the center at ````[0,0,0]```` to each face.
   * @param {Boolean} [params.active=true] Whether the skybox plane is initially active. Only skyboxes while this is true.
   * @returns {Skybox} The new skybox.
   */
  createSkybox(id: string, params: {
      src?: string;
      encoding?: string;
      size?: number;
      active?: boolean;
  }): any; //Skybox;
  
  /**
   * Destroys a skybox.
   * @param id
  */
  destroySkybox(id: string): void;

  /**
   Destroys all skyboxes.
    */
  clear(): void;
}
