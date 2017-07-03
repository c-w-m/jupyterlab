// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  ReadonlyJSONObject
} from '@phosphor/coreutils';

import {
  IRenderMime
} from '@jupyterlab/rendermime-interfaces';


/**
 * The default mime model implementation.
 */
export
class MimeModel implements IRenderMime.IMimeModel {
  /**
   * Construct a new mime model.
   */
  constructor(options: MimeModel.IOptions = {}) {
    this.trusted = !!options.trusted;
    this._data = options.data || {};
    this._metadata = options.metadata || {};
  }

  /**
   * Whether the model is trusted.
   */
  readonly trusted: boolean;

  /**
   * The data associated with the model.
   */
  get data(): ReadonlyJSONObject {
    return this._data;
  }

  /**
   * The metadata associated with the model.
   */
  get metadata(): ReadonlyJSONObject {
    return this._metadata;
  }

  /**
   * Set the data associated with the model.
   */
  setData(data: ReadonlyJSONObject): void {
    this._data = data;
  }

  /**
   * Set the metadata associated with the model.
   */
  setMetadata(data: ReadonlyJSONObject): void {
    this._metadata = data;
  }

  private _data: ReadonlyJSONObject;
  private _metadata: ReadonlyJSONObject;
}


/**
 * The namespace for MimeModel class statics.
 */
export
namespace MimeModel {
  /**
   * The options used to create a mime model.
   */
  export
  interface IOptions {
    /**
     * Whether the model is trusted.  Defaults to `false`.
     */
    trusted?: boolean;

    /**
     * The initial mime data.
     */
    data?: ReadonlyJSONObject;

    /**
     * The initial mime metadata.
     */
    metadata?: ReadonlyJSONObject;
  }
}
