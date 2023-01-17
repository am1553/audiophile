import React, { ChangeEvent, ReactNode, useState } from 'react'
import Input from '../../components/form/Input'
import RadioSelect from '../../components/form/RadioSelect'
import FormSection from './FormSection'
import Summary from './Summary'

const defaultFormData = {
    name: "Alexei Ward",
    emailAddress: "alexei@mail.com",
    phoneNumber: "+1202-555-0136",
    address: {
        street: "1137 Williams Avenue", 
        zipCode: "10001", 
        city: "New York", 
        country: "United States"
    }
}


function Form() {

    const [formData, setFormData] = useState(defaultFormData)
    const { name, emailAddress, phoneNumber, address } = formData

  return (
    <form className='bg-white p-10 rounded-xl' >
        <h3>checkout</h3>
        <FormSection title={"billing details"}>
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
                <Input 
                    label={"Name"}
                    placeholder={formData.name}
                    onChange = { (e : ChangeEvent<HTMLInputElement>) => {
                        const element = e.target as HTMLInputElement
                        const value = element.value
                        setFormData((pervState) => ({...pervState, name: value }))
                    } }
                />
                <Input 
                    label={"Email Address"} 
                    placeholder={formData.emailAddress}
                    onChange = { (e : ChangeEvent<HTMLInputElement>) => {
                        const element = e.target as HTMLInputElement
                        const value = element.value
                        setFormData((pervState) => ({...pervState, emailAddress: value }))
                    } }
                />
                <Input 
                    label={"Phone Number"} 
                    placeholder={formData.phoneNumber}
                    onChange = { (e : ChangeEvent<HTMLInputElement>) => {
                        const element = e.target as HTMLInputElement
                        const value = element.value
                        setFormData((pervState) => ({...pervState, phoneNumber: value }))
                    } }
                />
            </div>
        </FormSection>

        <FormSection title='shipping info'>
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
                <div className="col-span-2">
                    <Input 
                        label={"Your Address"} 
                        placeholder = { formData.address.street }
                        onChange = { (e : ChangeEvent<HTMLInputElement>) => {
                            const element = e.target as HTMLInputElement
                            const value = element.value
                            setFormData((pervState) => ({...pervState, address: {...address, street: value} }))
                        } }
                    />
                </div>
                <Input 
                    label={"Zip Code"} 
                    placeholder = { formData.address.zipCode }
                    onChange = { (e : ChangeEvent<HTMLInputElement>) => {
                        const element = e.target as HTMLInputElement
                        const value = element.value
                        setFormData((pervState) => ({...pervState, address: {...address, zipCode: value} }))
                    } }
                />
                <Input 
                    label={"City"} 
                    placeholder = { formData.address.city }
                    onChange = { (e : ChangeEvent<HTMLInputElement>) => {
                        const element = e.target as HTMLInputElement
                        const value = element.value
                        setFormData((pervState) => ({...pervState, address: {...address, city: value} }))
                    } }
                />
                <Input 
                    label={"country"} 
                    placeholder = { formData.address.country }
                    onChange = { (e : ChangeEvent<HTMLInputElement>) => {
                        const element = e.target as HTMLInputElement
                        const value = element.value
                        setFormData((pervState) => ({...pervState, address: {...address, country: value} }))
                    } }
                />
            </div>
        </FormSection>

        <FormSection title='payment details'>
            <div className="flex flex-col justify-end items-end gap-4">
                <RadioSelect text={"e-Money"} onSelect={() => {}}/>
                <RadioSelect text={"Cash On Delivery"} onSelect={() => {}}/>
            </div>
        </FormSection>
    </form>
  )
}

export default Form