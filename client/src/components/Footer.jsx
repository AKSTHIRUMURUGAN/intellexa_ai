import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
 <div className='w-20 flex justify-right gap-5 '>
  <img
    className="w-10 h-10 rounded-lg object-cover"
    src="/logo.png" 
    alt="Background Image"
  />


    <img
      className="w-fit"  
      src="/title.png"
      alt="Overlay Image"
    />

  </div>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About Intellexa AI
                </Footer.Link>
                <Footer.Link
                  href='https://www.rajalakshmi.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About REC
                </Footer.Link>
                <Footer.Link
                  href='https://www.linkedin.com/in/a-k-s-thirumurugan-57b230211'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About ME
                </Footer.Link>

              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/Intellexa-AI'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github 
                </Footer.Link>
                <Footer.Link href='https://www.linkedin.com/in/intellexaai-rec-1034452a8/' target='_blank'>LinkedIn</Footer.Link>
                <Footer.Link href='https://www.instagram.com/intellexa.ai' target='_blank'>Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Contact' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>intellexa@rajalakshmi.edu.in</Footer.Link>
                <Footer.Link href='#'>ph.no: +91 8015946410</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='/'
            by="Intellexa AI"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/profile.php?id=61555726480055' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/intellexa.ai' icon={BsInstagram}/>
            <Footer.Icon href='https://github.com/Intellexa-AI' icon={BsGithub}/>
            <Footer.Icon href='https://www.linkedin.com/in/intellexaai-rec-1034452a8/' icon={BsLinkedin}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
