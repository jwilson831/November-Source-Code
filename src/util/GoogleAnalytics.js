import ReactGA from 'react-ga4';

export const sendGAPageView = (page) => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);
    ReactGA.send({ hitType: "pageview", page: page});
}