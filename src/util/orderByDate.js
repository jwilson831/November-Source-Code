export const orderByDate = ({data}) => {
    console.log(data);
    const sorted = data.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.acf.date).getTime() - new Date(b.acf.date).getTime();
    });
    return sorted;
  }