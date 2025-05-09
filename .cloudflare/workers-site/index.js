import { createEventHandler } from '@cloudflare/next-on-pages';
 
export default createEventHandler({
  // Optional: Enable streaming with server rendering
  streamingEnabled: true,
}); 