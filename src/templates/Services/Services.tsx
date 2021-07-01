import { useRouter } from 'next/router';
import Button from '@/components/ui/Button/Button';
import Hero from '../../components/layout/common/Hero/Hero';
import EmailSubs from '../../components/SubscribeForm/SubscribeForm';
import GetIdea from './GetIdea/GetIdea';
import Goals from './Goals/Goals';
import Quote from './Quote/Quote';
import Blueprint from './Blueprint/Blueprint';
import Development from './MvpDevelopment/Development';
import Process from './ProcessStage/Process';
import Pricing from './Pricing/Pricing';
const ServicesTemplate = () => {
    const router = useRouter();
    return (
        <>
            <Hero>
                <h1 > <strong>SaaS Product Blueprint</strong> <br /> to meet users needs and business goals</h1>
                <h4 >We research, plan & design v1 of your SaaS Product to make
                    it ready for the development and launch</h4>
                <Button theme={'blue'} width={270} onClick={() => router.push('/contact')}>See how it works</Button>
            </Hero>
            <GetIdea />
            <Goals />
            <Quote />
            <Blueprint />
            <Development />
            <Process />
            <Pricing />
            <EmailSubs />
        </>
    );
};

export default ServicesTemplate;



