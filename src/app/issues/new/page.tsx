'use client'
import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form'
import "easymde/dist/easymde.min.css";
import React from 'react'

interface IssueForm {
  title: string;
  description: string;
}

function NewIssuePage() {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <form 
    className='max-w-xl space-y-3' 
    onSubmit={handleSubmit((data) => console.log(data))}>
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register("title")} />
      </TextField.Root>
      <Controller
        name='description'
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}
      />

      <Button>
        Submit New Issue
      </Button>

    </form>
  )
}

export default NewIssuePage;