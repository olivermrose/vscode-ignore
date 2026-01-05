import { languages } from "vscode";
import type { TextDocument } from "vscode";
import { selector } from "../features";

export * from "./getConfig";
export * from "./promptTemplate";

export function isIgnoreFile(document: TextDocument) {
	return languages.match(selector, document);
}
