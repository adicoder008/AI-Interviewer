"use client"
import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import { Divide } from "lucide-react"
import Link from "next/link"
import { auth } from "@/firebase/client"
import { toast } from "sonner";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signIn, signUp } from "@/lib/actions/auth.actions";

//This is just a TypeScript type that defines what "PROPS" your AuthForm component should accept.
type AuthFormProps = {//prop types , i.e what kind of props it expects
  type: "signIn" | "signUp";
};

//This is a function that returns a Zod schema based on the form type.
//that is form if of 2 types , signIn and signUp


const AuthformSchema = ({ type }: { type: FormType }) => {
  return z.object({
    name: type === "signUp" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

// type FormType = "sign-in" | "sign-up";
export const AuthForm=({ type }: { type: FormType })=> {

  const schema=AuthformSchema({type}); //initialising a schema with a previously built schema

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [accountId, setAccountId] = useState<string | null>(null);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email:"",
      password:"",
    },
  })

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      if (type === "signUp") {
        const { name, email, password } = data;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success("Account created successfully. Please sign in.");
        router.push("/signIn");
      } else {
        const { email, password } = data;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await userCredential.user.getIdToken();
        if (!idToken) {
          toast.error("Sign in Failed. Please try again.");
          return;
        }

        await signIn({
          email,
          idToken,
        });

        toast.success("Signed in successfully.");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  };

  
  return (
    <>
    <div className="border-black ">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {type === "signUp" && <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />}
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn@123" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* {type==="signIn"?
        } */}

        <Button type="submit" className="w-full text-center bg-red-400 text-white" disabled={loading}>{type === "signIn" ? "Sign In" : "Sign Up"}
              {loading && <img src="/assets/icons/loader.svg" className="animate-spin" alt="" />}
            </Button>
            {/* we use * for dynamic rendering */}
            {errormsg && <p className="text-red-500 text-center">*{errormsg}</p>}
            <div className="flex justify-center">
              <p className="">{type === "signIn" ? "Dont have an account ? " : "Already have an account ? "}</p>
              <Link className="text-red-400" href={type === "signIn" ? "/signUp" : "/signIn"} >{type === "signIn" ? " signUp" : " signIn"}</Link>
            </div>
          </form>
    </Form>
    </div>
    </>
  )
}