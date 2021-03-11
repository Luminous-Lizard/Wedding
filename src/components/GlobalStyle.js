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

@media screen and (max-width: 905px) {
   .links.active {
      width: 100%;
   }
   .links.active .second {
      min-width: 95vw;
   }
   .not-active {
   transform: translateX(-100%);
   transition: transform 1.8s ease-out;
   }
   .second {
      li {
         font-size: 1.5rem;
      }
   }
   .not-active .nav-link {
      color: transparent;
   }

   .contact {
      margin-bottom: 3rem;
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
