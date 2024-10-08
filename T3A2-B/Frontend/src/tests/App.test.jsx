import '@testing-library/jest-dom'
import { describe, expect, it } from "vitest";
import renderWithRouter from './config/RenderWithRouter'
import { screen } from '@testing-library/react'
import App from '../App'
import Home from '../routes/Home'
import Team from '../routes/Team'
import Contact from '../routes/Contact'
import Login from '../routes/Login'
import Booking from '../routes/Booking'


describe('App Component', () => {
    it('renders Home component on default route', () => {
      renderWithRouter(<App />, { route: '/' })
      expect(screen.getByText('Pawfect Care')).toBeInTheDocument()
    })
  
    it('renders Team component on /ourteam route', () => {
      renderWithRouter(<App />, { route: '/ourteam' })
      expect(screen.getByText('Dr. Riley Kim')).toBeInTheDocument()
    })

    it('renders Contact component on /contact route', () => {
      renderWithRouter(<App />, { route: '/contact' })
      expect(screen.getByText('Contact Form')).toBeInTheDocument()
    })
  
    it('renders Login component on /login route', () => {
      renderWithRouter(<App />, { route: '/user/login' })
      expect(screen.getByText('Login or Register')).toBeInTheDocument()
    })
  
    it('renders Booking component on /booking route', () => {
      renderWithRouter(<App />, { route: '/booking' })
      expect(screen.getByText('Book Your Appointment')).toBeInTheDocument()
    })

  
describe('Individual Components', () => {
    it('renders Home component independently', () => {
      renderWithRouter(<Home />)
      expect(screen.getByText('Pawfect Care')).toBeInTheDocument()
    })
  
    it('renders Team component independently', () => {
      renderWithRouter(<Team />)
      expect(screen.getByText('Our Team')).toBeInTheDocument()
    })

    it('renders Contact component independently', () => {
      renderWithRouter(<Contact />)
      expect(screen.getByText('Contact Form')).toBeInTheDocument()
      })
    
    it('renders Login component independently', () => {
      renderWithRouter(<Login />)
      expect(screen.getByText('Login or Register')).toBeInTheDocument()
    })


    it('renders Booking component independently', () => {
      renderWithRouter(<Booking />)
      expect(screen.getByText('Book Your Appointment')).toBeInTheDocument()
    })
  })
})