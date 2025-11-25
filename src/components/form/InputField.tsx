import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InputField = ({name, label, name, placeholder, register, error, validation, disabled, value}) => {
    return (
        <div className='space-y-2'>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
        </div>
    )
}
export default InputField
