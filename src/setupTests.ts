/// <reference types="vitest" />
import "@testing-library/jest-dom";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

const useQuery = vi.fn();

afterEach(() => {
  cleanup();
});

module.exports = {
  useQuery,
};
