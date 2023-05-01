    /** 
     * getExpTimeString : return the working time in string
     * isToday : return if a date is today's date
     * differenceInMonths : return the differnce in month between 2 dates
     * differenceInYears : return the differnce in years between 2 dates
     * getMonthString : return the month in string
    */

    function getExpTimeString(date1, date2){
        const monthDiff = differenceInMonths(date1, date2);
  
        var startMonth = getMonthString(date2.getMonth());
        var startYear = date2.getFullYear();
        var endMonth = getMonthString(date1.getMonth());
        var endYear = date1.getFullYear();
  
        if(isToday(date1)){
          endMonth = "Present";
          endYear = "";
        }
  
        if(monthDiff < 12){
          return startMonth + " " +   startYear + " - " + endMonth + " " + endYear + " (" + monthDiff + " month(s)" + ")";
        }else if (monthDiff >= 12){
          const yearDiff = differenceInYears(date1, date2);
          return startMonth + " " +   startYear + " - " + endMonth + " " + endYear + " (" + yearDiff + " year(s)" + ")";
        }
      }

    
    /*from: https://flaviocopes.com/how-to-determine-date-is-today-javascript/*/
    function isToday(date){

        const today = new Date()
  
        return date.getDate() == today.getDate() &&
        date.getMonth() == today.getMonth() &&
        date.getFullYear() == today.getFullYear()
      }
      
      /*from : https://codingbeautydev.com/blog/javascript-get-number-of-months-between-two-dates/*/
      function differenceInMonths(date1, date2) {
        const monthDiff = date1.getMonth() - date2.getMonth();
        const yearDiff = date1.getYear() - date2.getYear();
  
        return (monthDiff + yearDiff * 12) + 1;
      }
  
      function differenceInYears(date1, date2) {
        const yearDiff = date1.getYear() - date2.getYear();
  
        return yearDiff;
      }
  
      function getMonthString(month){
        switch(month){
          case 0: return "January";
          case 1: return "February";
          case 2: return "March";
          case 3: return "April";
          case 4: return "May";
          case 5: return "June";
          case 6: return "July";
          case 7: return "August";
          case 8: return "September";
          case 9: return "October";
          case 10: return "November";
          case 11: return "December";
        }
  
      }