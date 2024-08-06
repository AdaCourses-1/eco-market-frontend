import { onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getFromLocalStorage, setToLocalStorage } from '@/composables/useLocalStorage'
import type { Address, MappedAddress } from '@/components/shared/Profile/profile.types'

interface Profile {
  name: string
  phone: number | string
  email: string
  addresses: Address[]
  selectedAddress?: MappedAddress | null
}

interface UserInfo {
  name: string
  email: string
  phone: number | string
}

function generateUniqueId() {
  return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1000)
}

export const useProfileStore = defineStore('user', () => {
  let profile = reactive<Profile>({
    name: '',
    phone: '',
    email: '',
    addresses: [],
    selectedAddress: {
      id: '',
      label: '',
      phone: ''
    }
  })

  const setProfile = (userInfo: UserInfo) => {
    setToLocalStorage('profile', { ...profile, ...userInfo })

    Object.assign(profile, userInfo)
  }

  const getProfile = () => {
    const savedProfile = getFromLocalStorage('profile')

    if (savedProfile) {
      Object.assign(profile, savedProfile)
    }
  }

  const getAddressId = () => generateUniqueId()

  const getAddresses = (): void => {
    if (!profile.addresses.length) {
      const savedAddresses = getFromLocalStorage('addresses')
      profile.addresses = savedAddresses || []
    }
  }

  const addNewAddress = (address: Address): void => {
    const newAddress = { ...address, id: getAddressId() }

    setToLocalStorage('addresses', [...profile.addresses, newAddress])

    profile.addresses.push(newAddress)
  }

  const setCurrentAddress = (address: MappedAddress): void => {
    profile.selectedAddress = address
    setToLocalStorage('selectedAddress', address)
  }

  const getCurrentAddress = (): void => {
    const savedCurrentAddress = getFromLocalStorage('selectedAddress')

    if (savedCurrentAddress) {
      profile.selectedAddress = savedCurrentAddress
    }
  }

  onMounted(() => {
    getProfile()
    getAddresses()
    getCurrentAddress()
  })

  return { profile, addNewAddress, setCurrentAddress, setProfile }
})
