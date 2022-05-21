import {
  Input as ChakraInput,
  Select as ChakraSelect,
  InputProps as ChakraInputProps,
  SelectProps as ChakraSelectProps,
  FormLabel,
  FormControl,
  FormErrorMessage,
  useColorModeValue
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError, RegisterOptions } from "react-hook-form";

interface InputProps extends ChakraSelectProps {
  name: string;
  label?: string;
  error?: FieldError;
  type?: "tel" | "cpf" | "email" | string;
  validations?: RegisterOptions;
  options?: {} | string;
  placeholder?: string;
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, InputProps> = (
  { name, label, placeholder, options, error = null, type = `text`, ...rest },
  ref
) => (
  <FormControl isInvalid={!!error}>
    {!!label && (
      <FormLabel htmlFor={name} fontSize="md" fontWeight="medium">
        {label}
      </FormLabel>
    )}
    <ChakraSelect
      ref={ref}
      id={name}
      placeholder={placeholder}
      name={name}
      // type={type === `tel` ? type : `text`}
      variant="outline"
      size="md"
      bgColor={useColorModeValue(`gray.200`, `gray.900`)}
      borderColor={useColorModeValue(`gray.300`, `gray.600`)}
      maxLength={120}
      {...rest}
    >
      {typeof options === "string" ? (
        <option key={1}>{options}</option>
      ) : (
        options.map((item, index) => <option key={index}>{item.text}</option>)
      )}
    </ChakraSelect>

    {!!error && (
      <FormErrorMessage fontSize="xs">{error.message}</FormErrorMessage>
    )}
  </FormControl>
);

export const Selectt = forwardRef(Select);
