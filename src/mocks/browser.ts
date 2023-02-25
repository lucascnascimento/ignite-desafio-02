import { setupWorker } from "msw";
import { productHandlers } from "./products";

const handlers = [...productHandlers];

export const worker = setupWorker(...handlers);
