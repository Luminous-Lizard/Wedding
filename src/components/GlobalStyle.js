import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${"" /* General Settings */}
*{
   margin: 0; 
   padding: 0;
   box-sizing: border-box;
}

body {
   overflow-x: hidden;
   background-color: #f3e8e9;
   font-family: 'Source Sans Pro', sans-serif;
   
}

.not-active {
   transform: translateX(-100%);
   transition: transform 1.3s linear;
}

.active {
   transform: translateX(0%);
}

${
  "" /* #F5E5E6
#9db49a
#BDAE8D
#A97365
#F9B9A9 
#687C8C
#4D7366
font-family: 'Rubik', sans-serif;
font-family: 'Source Sans Pro', sans-serif;*/
}



@media screen and (max-width: 905px) {
   .links.active {
      width: 100%;
   }
   .links.active .first {
      min-width: 85vw;
   }
   .links.active .second {
      min-width: 95vw;
   }
   .not-active {
   transform: translateX(-100%);
   transition: transform 1.8s linear;
      li {
      color: transparent;
      }
   }
   .second {
      li {
         font-size: 1.5rem;
      }
   }

   .headline {
      h1 {
         margin-left: 20px;
         padding-top: 55px;
         font-size: 2rem;
      }
   }

   .one { 
      flex-direction: column;
  }
  .info {
     width: 60vw;
  }

  .about-content {
     padding-bottom: 2rem;
   
  }
  .text-container {
     font-size: 1rem;
  }
  .about-image {
     position: absolute;
     top: 0;
     left: 0;
  }



}

`;

export default GlobalStyle;
