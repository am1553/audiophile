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
        </FormSection>

        <FormSection title='shipping info'>
            <Input 
                label={"Your Address"} 
                placeholder = { formData.address.street }
                onChange = { (e : ChangeEvent<HTMLInputElement>) => {
                    const element = e.target as HTMLInputElement
                    const value = element.value
                    setFormData((pervState) => ({...pervState, address: {...address, street: value} }))
                } }
            />
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
                label={"city"} 
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
        </FormSection>

        <FormSection title='payment method'>
            <RadioSelect text={"e-Money"} onSelect={() => {}}/>
            <RadioSelect text={"CashOnDelivery"} onSelect={() => {}}/>
        </FormSection>
    </form>
  )
}

export default Form