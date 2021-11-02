import styled from 'styled-components'

export const SponsorName = styled.p`

    @media (min-width: 1700px){
        position: absolute;
        right: 140px;
        bottom: 65%;
        opacity: 0;
        @keyframes marginTickerLarge {
            0% {
                bottom: 65%;
                opacity:0;
            }
            1%{
                opacity:1;
            }
            99%{
                opacity: 1;
            }
        
            100% {
                bottom: -120rem;
    
            }
        }
        -webkit-animation-iteration-count: infinite; 
                    animation-iteration-count: infinite;
    
            -webkit-animation-timing-function: linear;
                    animation-timing-function: linear;
    
            -webkit-animation-name: marginTickerLarge;
                    animation-name: marginTickerLarge;
    
            -webkit-animation-duration: 32s;
                    animation-duration: 32s;
    
            -webkit-animation-delay: ${props => props.delay}s;
            animation-delay: ${props => props.delay}s;
    }

    @media (min-width: 993px) and (max-width: 1699px){
        position: absolute;
        right: 70px;
        bottom: 55%;
        opacity: 0;

        @keyframes marginTicker {
            0% {
                bottom: 55%;
                opacity:0;
            }
            1%{
                opacity:1;
            }
            99%{
                opacity: 1;
            }
        
            100% {
                bottom: -150rem;
    
            }
        }
    
            -webkit-animation-iteration-count: infinite; 
                    animation-iteration-count: infinite;
    
            -webkit-animation-timing-function: linear;
                    animation-timing-function: linear;
    
            -webkit-animation-name: marginTicker;
                    animation-name: marginTicker;
    
            -webkit-animation-duration: 32s;
                    animation-duration: 32s;
    
            -webkit-animation-delay: ${props => props.delay}s;
            animation-delay: ${props => props.delay}s;
    }
    

`