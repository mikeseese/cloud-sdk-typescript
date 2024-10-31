/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { logsV1DownloadLogForProcess } from "../funcs/logsV1DownloadLogForProcess.js";
import { logsV1GetLogsForProcess } from "../funcs/logsV1GetLogsForProcess.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";

export class LogsV1 extends ClientSDK {
  /**
   * Returns a stream of logs for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.
   */
  async getLogsForProcess(
    processId: string,
    appId?: string | undefined,
    follow?: boolean | undefined,
    tailLines?: number | undefined,
    options?: RequestOptions,
  ): Promise<ReadableStream<Uint8Array>> {
    return unwrapAsync(logsV1GetLogsForProcess(
      this,
      processId,
      appId,
      follow,
      tailLines,
      options,
    ));
  }

  /**
   * Download entire log file for a stopped process.
   */
  async downloadLogForProcess(
    processId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<ReadableStream<Uint8Array>> {
    return unwrapAsync(logsV1DownloadLogForProcess(
      this,
      processId,
      appId,
      options,
    ));
  }
}
