import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="dark:bg-slate-800 border-t border-neutral-200">
      <Container>
        <div className="py-6 flex flex-col lg:flex-row items-center">
          <h3 className="font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            It's a blog, don't take it too seriously.
          </h3>

        </div>
      </Container>
    </footer>
  )
}

export default Footer
