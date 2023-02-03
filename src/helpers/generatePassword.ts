import { generate } from "generate-password";
export const generatedPass = generate(
    {
        length: 8,
        numbers: true,
    }
)