import { User, Contact, ApiResponse, PaginatedResponse } from './types'

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'jane@example.com',
    name: 'Jane Smith',
    avatar: 'https://via.placeholder.com/150',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  }
]

const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '+1234567890',
    message: 'Hello, I would like to know more about your services.',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    message: 'Interested in your mobile app development services.',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  }
]

// Mock API functions
export const mockUserService = {
  async getUsers(): Promise<ApiResponse<User[]>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockUsers,
          success: true,
          message: 'Users fetched successfully'
        })
      }, 1000)
    })
  },

  async getUserById(id: string): Promise<ApiResponse<User | null>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = mockUsers.find(u => u.id === id)
        resolve({
          data: user || null,
          success: !!user,
          message: user ? 'User found' : 'User not found'
        })
      }, 500)
    })
  }
}

export const mockContactService = {
  async getContacts(): Promise<ApiResponse<Contact[]>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockContacts,
          success: true,
          message: 'Contacts fetched successfully'
        })
      }, 1000)
    })
  },

  async createContact(contact: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Contact>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newContact: Contact = {
          ...contact,
          id: (mockContacts.length + 1).toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
        mockContacts.push(newContact)
        resolve({
          data: newContact,
          success: true,
          message: 'Contact created successfully'
        })
      }, 500)
    })
  }
}
