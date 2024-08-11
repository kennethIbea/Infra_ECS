import React, { useState } from "react"
import { useForm } from "../../context/FormContext"
import { UserType } from "../../type"
import ReactFlagsSelect from "react-flags-select"
import { debounce } from "lodash"
import PhoneInput, { getCountries, getCountryCallingCode } from "react-phone-number-input"
import en from "react-phone-number-input/locale/en.json"

export const Name: React.FC = () => {
  const { addInfo, goBack, data } = useForm()
  const [firstName, setFirstName] = useState<string | undefined>(data.firstName)
  const [lastName, setLastName] = useState<string | undefined>(data.lastName)
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(data.phone)

  const handleBack = (e: React.FormEvent) => {
    e.preventDefault()
    const data: UserType = {
      display: 1,
    }
    goBack(data)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newData: UserType = {
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      display: 3,
    }
    addInfo(newData)
  }

  const debouncedSetPhoneNumber = debounce((val) => {
    setPhoneNumber(val)
  }, 100)

  const countries: { [key: string]: { primary: string; secondary: string } | string } = {}

  getCountries().forEach((code) => {
    // Assign values to the countries object based on the country code
    countries[code] = { primary: en[code], secondary: `+${getCountryCallingCode(code)}` }
    // Add more cases for other country codes if needed
  })

  const handlePhoneNumberEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      // sendOtp()
    }
  }

  const CountrySelectComponent = ({ value, onChange }: any) => {
    return (
      <ReactFlagsSelect
        showSelectedLabel={false}
        showSecondarySelectedLabel={false}
        showOptionLabel={true}
        showSecondaryOptionLabel={true}
        selected={value}
        placeholder=" "
        customLabels={countries}
        fullWidth={false}
        className="max-w-[65px] min-w-[65px] bg-mineshaft rounded-l-lg sm:rounded-l-xl h-12 sm:h-16 align-middle !pb-0"
        selectButtonClassName="!border-0 my-auto h-full"
        onSelect={(code) => {
          onChange(code)
        }}
      />
    )
  }
  const MemoizedCountrySelectComponent = React.memo(CountrySelectComponent)

  return (
    <form className="space-y-6 text-slate-300 mt-5" onSubmit={handleSubmit}>
      {/* FULLNAME INPUT */}
      <div className="relative">
        <input
          type="text"
          id="fullName-5"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="block px-2.5 pb-4 pt-4 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
          placeholder="John"
          required
        />
        <label
          htmlFor="fullName-5"
          className="mx-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          First Name
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="fullName-5"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="block px-2.5 py-4 pt-4 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
          placeholder="Doe"
          required
        />
        <label
          htmlFor="fullName-5"
          className="mx-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Last Name
        </label>
      </div>
      <div>
        <PhoneInput
          className="w-full flex border border-solid border-gray-600 rounded-lg"
          // inputComponent={
          // 	({value, onChange, ref}) => <input ref= value={value} onChange={onChange} />
          // }
          countrySelectComponent={MemoizedCountrySelectComponent}
          numberInputProps={{
            className:
              "block px-2.5 py-3 w-full text-sm bg-transparent bg-dark appearance-none text-white focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500",
          }}
          international
          defaultCountry="US"
          value={phoneNumber}
          onKeyDown={handlePhoneNumberEnter}
          countryCallingCodeEditable={false}
          onChange={(val: any) => {
            debouncedSetPhoneNumber(val)
          }}
        />
      </div>
      <div className="flex justify-between items-center">
        <div
          onClick={handleBack}
          className="flex gap-2 cursor-pointer text-indigo-600 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-2 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <p>Back</p>
        </div>
        <button
          type="submit"
          className="flex justify-center gap-3 text-white w-48 font-semibold bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-500 ease-in-out rounded-lg shadow-md px-5 py-2.5 text-center"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
