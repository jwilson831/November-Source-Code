import styled from 'styled-components'

export const SponsorName = styled.p`
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
    @keyframes marginTicker2 {
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
            bottom: 10rem;

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

`