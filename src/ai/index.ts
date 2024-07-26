import { pipeline, env } from '@xenova/transformers';


// // Specify a custom location for models (defaults to '/models/').
// env.localModelPath = '/path/to/models/';

// // Disable the loading of remote models from the Hugging Face Hub:
// env.allowRemoteModels = false;

// // Set location of .wasm files. Defaults to use a CDN.
// env.backends.onnx.wasm.wasmPaths = '/path/to/files/';

export async function sentimentAnalysis(input: string){
    let classifier = await pipeline('sentiment-analysis');
    let result = await classifier(input);
    return result
// [{'label': 'POSITIVE', 'score': 0.9998}]

}
