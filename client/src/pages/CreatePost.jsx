import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React from "react";

const CreatePost = () => {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            // onChange={(e) =>
            //   setFormData({ ...formData, title: e.target.value })
            // }
          />
          <Select
          // onChange={(e) =>
          //   setFormData({ ...formData, category: e.target.value })
          // }
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            className="w-[50%]"
            // onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            color="blue"
            size="sm"
            outline
            // onClick={handleUpdloadImage}
            // disabled={imageUploadProgress}
          >
            Upload Image
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
