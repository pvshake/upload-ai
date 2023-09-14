import { FFmpeg } from "@ffmpeg/ffmpeg";
import coreURL from "../ffmpeg/ffmpeg-core.js?url";
import wasmURL from "../ffmpeg/ffmpeg-core.wasm?url";
import workerURL from "../ffmpeg/ffmpeg-worker.js?url";

let ffmpeg: FFmpeg | null; // sempre que preciso carregar alguma lib ou componente que vai ser utilizado em determinado momento, usar a tipagem 'null' para ser carregado apenas quando for utilizar

export async function getFFmpeg() {
  if (ffmpeg) return ffmpeg;
  ffmpeg = new FFmpeg();
  if (!ffmpeg.loaded)
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL,
    });
  return ffmpeg;
}
