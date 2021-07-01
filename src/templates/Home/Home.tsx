import Hero from '../../components/layout/common/Hero/Hero';
import WithLogoTypes from './WithLogoTypes/WithLogoTypes';
import Services from './Services/Services';
import OurSkills from './OurSkills/OurSkills';
import Process from './Process/Process';
import Support from './Support/Support';
import Works from './Works/Works';
import Form from './Form/Form';
import EmailSubs from '../../components/SubscribeForm/SubscribeForm';
import Button from '@/components/ui/Button/Button';
import { useRouter } from 'next/router';


const HomeTemplate = () => {

    const router = useRouter();
    return (
        <>
            <Hero >
                <h1 >Turn your Product Idea into scalable <strong>SaaS Business</strong></h1>
                <h4>We are a SaaS Product studio that helps entrepreneurs research, design, and build their product ideas.</h4>
                <Button theme={'blue'} width={270} onClick={() => router.push('/contact')}>Contact us</Button>
            </Hero>
            <WithLogoTypes />
            <Services />
            <OurSkills />
            <Works />
            <Process />
            <Support />
            <Form />
            <EmailSubs />
        </>
    );
};

export default HomeTemplate;


