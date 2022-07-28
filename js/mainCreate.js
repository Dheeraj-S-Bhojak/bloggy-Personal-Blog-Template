
  const a = new Date();
  const date = (a.getDate());
  const month = ((a.getMonth()));
  const year = a.getFullYear();



const bloggyObj = {
    sideBarSocialMediaIconDetails: [
        {
            id: 1,
            title: "Twitter",
            iconClass: "fa-twitter",
            hrefLink: "https://twitter.com/Dheerajsbhojak/status/1290827366973894656",
        },
        {
            id: 2,
            title: "Facebook",
            iconClass: "fa-facebook-f",
            hrefLink: "https://www.facebook.com/dheeraj.s.bhojak",
        },
        {
            id: 3,
            title: "Linkedin",
            iconClass: "fa-linkedin-in",
            hrefLink: "https://in.linkedin.com/in/dheeraj-s-bhojak-54606815a",
        },
        {
            id: 4,
            title: "Instagram",
            iconClass: "fa-instagram",
            hrefLink: "https://www.instagram.com/dheeraj_s_bhojak/?hl=en",
        },
    ],
    menuBarDetails: [
        {
            sNo: 1,
            name: "Home",
            id: "Home",
            hrefLink: "index.html",
        },
        {
            sNo: 2,
            name: "About",
            id: "About",
            hrefLink: "about.html",
            
        },
        {
            sNo: 3,
            name: "Pages",
            id: "pages",
            hrefLink: "#",
            submenu: [
                {
                    sNo: 4,
                    name: "Blog Grid",
                    id: "blog grid",
                    hrefLink: "blog.html",
                },
                {
                    sNo: 5,
                    name: "Blog Detail",
                    id: "Blog Detail",
                    hrefLink: "single.html",
                },
            ]
        },
        {
            sNo: 6,
            name: "Contact",
            id: "contact",
            hrefLink: "contact.html",
        }
        
    ],
    carouseelDeatails: [
        {
            divItemActive: "carousel-item active",
            imgSrc: "img/carousel-1.jpg",
            h2Class: "mb-3 text-white font-weight-bold",
            divWhtie: "d-flex text-white",
        },
        {
            divItemActive: "carousel-item",
            imgSrc: "img/carousel-2.jpg",
            h2Class: "text-white font-weight-bold",
            divWhtie: "d-flex",
        },
        {
            divItemActive: "carousel-item",
            imgSrc: "img/carousel-3.jpg",
            h2Class: "text-white font-weight-bold",
            divWhtie: "d-flex",
        }
    ],
   
    blogListImages: [
        {
            blogImgSrc: "img/blog-1.jpg",
            number: 1
        },
        {
            blogImgSrc: "img/blog-2.jpg",
            number: 2,
             
        },
        {
            blogImgSrc: "img/blog-3.jpg",
            number: 3,
             
        },
    ],
    blogListImages1: [
        {
            blogImgSrc: "img/blog-4.jpg",
            number: 4,
             
        },
        {
            blogImgSrc: "img/blog-5.jpg",
            number: 5,

             
        },
        {
            blogImgSrc: "img/blog-6.jpg",
            number: 6,
             
        },
            
    
    ],

 
    sidebar() {//create a function 
        const sideBar = document.createElement('div');      //create a div and set attribute &append
        sideBar.setAttribute('class', "sidebar");
        document.getElementById('wrapperId').append(sideBar);
        
        //a new div create,set attributes & apppend
        const sideBarText = document.createElement('div');
        sideBarText.setAttribute("class", "sidebar-text d-flex flex-column h-100 justify-content-center text-center");
        sideBar.append(sideBarText);
       
        //create a image element
        const imgElement = document.createElement('img');
        imgElement.setAttribute("class", "mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3");
        imgElement.setAttribute("src", "img/profile.jpg");
        sideBarText.append(imgElement);

        //h1 element create 
        const headingName = document.createElement("h1");
        headingName.setAttribute("class", "font-weight-bold");
        headingName.innerText = ("Kate Glover");
        sideBarText.append(headingName);
        
        // create a  paragraph 
        const sideBarProfileAbout = document.createElement("p");
        sideBarProfileAbout.setAttribute("class", "mb-4");
        sideBarProfileAbout.innerText = "Justo stet no accusam stet invidunt sanctus magna clita vero eirmod, sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam justo";
        sideBarText.append(sideBarProfileAbout);

        //create four social media icons
        //create a new div
        const sideBarIconDiv = document.createElement("div");
        sideBarIconDiv.setAttribute("class", "d-flex justify-content-center mb-5");
        sideBarText.append(sideBarIconDiv);

        //display four icons with using for 
        this.sideBarSocialMediaIconDetails.forEach(element => {
            //create anchor tags
            const iconAnchorTag = document.createElement("a");
            iconAnchorTag.setAttribute("class", "btn btn-outline-primary mr-2");
            iconAnchorTag.setAttribute("href", element.hrefLink);
            sideBarIconDiv.append(iconAnchorTag);
            
            //create icons
            const sideBarIconITag = document.createElement("i");
            sideBarIconITag.setAttribute("class", `fab ${element.iconClass}`);
            iconAnchorTag.append(sideBarIconITag);
        });
        
        // hire me anchor button
        
        const hireMeAnchorTag = document.createElement("a");
        hireMeAnchorTag.setAttribute("class", "btn btn-lg btn-block btn-primary mt-auto");
        hireMeAnchorTag.innerText = "Hire Me";
        sideBarText.append(hireMeAnchorTag);

        // angle double arrow 
        const dFlexIconDiv = document.createElement("div");
        dFlexIconDiv.setAttribute("class", "sidebar-icon d-flex flex-column h-100 justify-content-center text-right");
        sideBar.append(dFlexIconDiv);

        const dFlexIconI = document.createElement("i");
        dFlexIconI.setAttribute("class", "fas fa-2x fa-angle-double-right text-primary");
        dFlexIconDiv.append(dFlexIconI);

        
    },
    content() {
        //start content 
        const contantDiv = document.createElement("div");
        contantDiv.setAttribute("class", "content");
        contantDiv.setAttribute("id", "contantId")
        document.getElementById('wrapperId').append(contantDiv);
        //create a div navbar start 
        const contantContainerDiv = document.createElement("div");
        contantContainerDiv.setAttribute("class", "container p-0");
        contantDiv.append(contantContainerDiv);
        
        //nav start 
        const contantNav = document.createElement("nav");
        contantNav.setAttribute("class", "navbar navbar-expand-lg bg-secondary navbar-dark");
        contantContainerDiv.append(contantNav);
        //navBar logo 
        const contantNavAnchorTag = document.createElement("a");
        contantNavAnchorTag.setAttribute("class", "navbar-brand d-block d-lg-none");
        contantNavAnchorTag.setAttribute("href", "#");
        contantNavAnchorTag.innerHTML = "Navigation";
        contantNav.append(contantNavAnchorTag);
        //navbar logo button
        const contantNavLogoButton = document.createElement("button");
        contantNavLogoButton.setAttribute("class", "navbar-toggler");
        contantNavLogoButton.setAttribute("type", "button");
        contantNavLogoButton.setAttribute("data-toggle", "collapse");
        contantNavLogoButton.setAttribute("data-target", "#navbarCollapse");
        contantNav.append(contantNavLogoButton);

        // span toggler-icon
        const navSpanLogoButton = document.createElement("span");
        navSpanLogoButton.setAttribute("class", "navbar-toggler-icon");
        contantNavLogoButton.append(navSpanLogoButton);

        // navbar collapse
        const divNavCollapse = document.createElement("div");
        divNavCollapse.setAttribute("class", "collapse navbar-collapse justify-content-between");
        divNavCollapse.setAttribute("id", "navbarCollapse");
        contantNav.append(divNavCollapse);
        // div navbar margin 
        const divNavMargin = document.createElement("div");
        divNavMargin.setAttribute("class", "navbar-nav m-auto");
        divNavCollapse.append(divNavMargin);

        //create menus on navbar
        
               
        this.menuBarDetails.forEach(element => {
            // anchor tag for nav bar
            const menuAnchorTag = document.createElement("a");
            menuAnchorTag.setAttribute("class", "nav-item nav-link");
            menuAnchorTag.setAttribute("href", "element.hrefLink");
            menuAnchorTag.innerHTML = (element.name);
            divNavMargin.append(menuAnchorTag);
           
        });


    },

    //carousel start

    carsousel() {
        //container div
        const carsouselContainerDiv = document.createElement("div");
        carsouselContainerDiv.setAttribute("class", "container p-0");
        document.getElementById("contantId").append(carsouselContainerDiv);
        //div for carsousel 
        const carsouselBlogDiv = document.createElement("div");
        carsouselBlogDiv.setAttribute("id", "blog-carousel");
        carsouselBlogDiv.setAttribute("class", "carousel slide");
        carsouselBlogDiv.setAttribute("data-ride", "carousel");
        carsouselContainerDiv.append(carsouselBlogDiv);
        // div carsouset-inner
        const carsouselInner = document.createElement("div");
        carsouselInner.setAttribute("class", "carousel-inner");
        carsouselBlogDiv.append(carsouselInner);
        //div active item
        //         const carsouselActive = document.createElement("div");
        //         carsouselActive.setAttribute("class", "carousel-item active");
        //         carsouselInner.append(carsouselActive);
        // //img
        this.carouseelDeatails.forEach(element => {
            const carsouselActive = document.createElement("div");
            // carsouselActive.setAttribute("class", "carousel-item");
            carsouselActive.setAttribute("class", element.divItemActive);
            carsouselInner.append(carsouselActive);
            // img
            const carouselImage = document.createElement("img");
            carouselImage.setAttribute("class", "w-100");
            carouselImage.setAttribute("src", element.imgSrc);
            carsouselActive.append(carouselImage);
            // div 
            const carsouselJustify = document.createElement("div");
            carsouselJustify.setAttribute("class", "carousel-caption d-flex flex-column align-items-center justify-content-center");
            carsouselActive.append(carsouselJustify);
            // h2 heading
            const carsouselHeading2 = document.createElement("h2");
            // carsouselHeading2.setAttribute("class","text-white font-weight-bold");
            carsouselHeading2.setAttribute("class", element.h2Class);
            carsouselHeading2.innerText = "Lorem ipsum dolor sit amet";
            carsouselJustify.append(carsouselHeading2);
            //div for icons
            const carsouselIconColor = document.createElement("div");
            // carsouselIconColor.setAttribute("class", "d-flex");
            carsouselIconColor.setAttribute("class", element.divWhtie);
            carsouselJustify.append(carsouselIconColor);

            const iconeSmall = document.createElement("small");
            iconeSmall.setAttribute("class", "mr-2 ");
            carsouselIconColor.append(iconeSmall);
            // i icon
            const carsouselIconITag = document.createElement("i");
            carsouselIconITag.setAttribute("class", "fa fa-calendar-alt");
            carsouselIconITag.innerText = `${date}/${month}/${year}`;
            iconeSmall.append(carsouselIconITag);

            const iconeSmall1 = document.createElement("small");
            iconeSmall1.setAttribute("class", "mr-2 ");
            carsouselIconColor.append(iconeSmall1);
            // i icon
            const carsouselIconITag1 = document.createElement("i");
            carsouselIconITag1.setAttribute("class", "fa fa-folder");
            carsouselIconITag1.innerText = " Web Design";
            iconeSmall1.append(carsouselIconITag1);

            const iconeSmall2 = document.createElement("small");
            iconeSmall2.setAttribute("class", "mr-2 ");
            carsouselIconColor.append(iconeSmall2);
            // i icon
            const carsouselIconITag2 = document.createElement("i");
            carsouselIconITag2.setAttribute("class", "fa fa-comments");
            carsouselIconITag2.innerText = "15 Comments";
            iconeSmall2.append(carsouselIconITag2);
            
            //read more
            const carouseelReadMoreButton = document.createElement("a");
            carouseelReadMoreButton.setAttribute("class", "btn btn-lg btn-outline-light mt-4");
            carouseelReadMoreButton.setAttribute("href", "");
            carouseelReadMoreButton.innerText = "Read More";
            carsouselJustify.append(carouseelReadMoreButton);


        });

        //arrow on carousel anchor tag prev
        const carouselArrowAnchor = document.createElement("a");
        carouselArrowAnchor.setAttribute("class", "carousel-control-prev");
        carouselArrowAnchor.setAttribute("href", "#blog-carousel");
        carouselArrowAnchor.setAttribute("data-slide", "prev");
        carsouselBlogDiv.append(carouselArrowAnchor);
        //span
        const carouselSpan = document.createElement("span");
        carouselSpan.setAttribute("class", "carousel-control-prev-icon");
        carouselArrowAnchor.append(carouselSpan);
        
        //arrow on carousel anchor tag
        const carouselArrowAnchorNext = document.createElement("a");
        carouselArrowAnchorNext.setAttribute("class", "carousel-control-next");
        carouselArrowAnchorNext.setAttribute("href", "#blog-carousel");
        carouselArrowAnchorNext.setAttribute("data-slide", "next");
        carsouselBlogDiv.append(carouselArrowAnchorNext);
        //span
        const carouselSpanNext = document.createElement("span");
        carouselSpanNext.setAttribute("class", "carousel-control-next-icon");
        carouselArrowAnchorNext.append(carouselSpanNext);
    },
    blogList() {
        //blog list start
        const blogListContainerDiv = document.createElement("div");
        blogListContainerDiv.setAttribute("class", "container bg-white pt-5");
        document.getElementById("contantId").append(blogListContainerDiv);
        /// start loop from here
       
        
        this.blogListImages.forEach(element => {
            if (element.number < 4) {
    
                const blogListRowDiv = document.createElement("div");
                blogListRowDiv.setAttribute("class", "row blog-item px-3 pb-5");
        
                blogListContainerDiv.append(blogListRowDiv);
                //col-md-5
                const blogListColMdDiv = document.createElement("div");
                blogListColMdDiv.setAttribute("class", "col-md-5");
                blogListRowDiv.append(blogListColMdDiv);
                //image src
                const blogImg = document.createElement("img");
                blogImg.setAttribute("class", "img-fluid mb-4 mb-md-0");
                blogImg.setAttribute("src", element.blogImgSrc);
                blogImg.setAttribute("alt", "image");
                blogListColMdDiv.append(blogImg);
                //col-md-7
                const blogListColMd7Div = document.createElement("div");
                blogListColMd7Div.setAttribute("class", "col-md-7");
                blogListRowDiv.append(blogListColMd7Div);
                //h3
                const blogListH3 = document.createElement("h3");
                blogListH3.setAttribute("class", "mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold");
                blogListH3.innerText = "Lorem ipsum dolor sit amet";
                blogListColMd7Div.append(blogListH3);
                //div d-flex
                const bolgListDFlexDiv = document.createElement("div");
                bolgListDFlexDiv.setAttribute("class", "d-flex mb-3");
                blogListColMd7Div.append(bolgListDFlexDiv);
                // small 
                const blogListSmall = document.createElement("small");
                blogListSmall.setAttribute("class", "mr-2 text-muted");
                blogListSmall.innerText = `${date}/${month}/${year}`;
                bolgListDFlexDiv.append(blogListSmall);
                // icon i 
                const blogListIcon = document.createElement("i");
                blogListIcon.setAttribute("class", "fa fa-calendar-alt");
                blogListSmall.append(blogListIcon);
                // small 
                const blogListSmall1 = document.createElement("small");
                blogListSmall1.setAttribute("class", "mr-2 text-muted");
                blogListSmall1.innerText = "Web Design";
                bolgListDFlexDiv.append(blogListSmall1);
                // icon i 
                const blogListIcon1 = document.createElement("i");
                blogListIcon1.setAttribute("class", "fa fa-folder");
                blogListSmall1.append(blogListIcon1);
                // small 
                const blogListSmall2 = document.createElement("small");
                blogListSmall2.setAttribute("class", "mr-2 text-muted");
                blogListSmall2.innerText = "15 Comments";
                bolgListDFlexDiv.append(blogListSmall2);
                // icon i 
                const blogListIcon2 = document.createElement("i");
                blogListIcon2.setAttribute("class", "fa fa-comments");
                blogListSmall2.append(blogListIcon2);

                // paragraph 
                const blogListParagraph = document.createElement("p");
                blogListParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero";
                blogListColMd7Div.append(blogListParagraph);
                // readmore anchor tag
                const blogListAnchorTag = document.createElement("a");
                blogListAnchorTag.setAttribute("class", "btn btn-link p-0");
                blogListAnchorTag.setAttribute("href", "");
                blogListAnchorTag.innerText = "Read More";
                blogListColMd7Div.append(blogListAnchorTag);
                // angle icones 
                const blogListAngleIcon = document.createElement("i");
                blogListAngleIcon.setAttribute("class", "fa-angle-right");
                blogListAnchorTag.append(blogListAngleIcon);
            }
            // if  conditiion for print sub
            if (element.number === 3) {
                const subsContainerDiv = document.createElement("div");
                subsContainerDiv.setAttribute("class", "container py-5 px-4 bg-secondary text-center");
                document.getElementById("contantId").append(subsContainerDiv);
                //subs h1
                const subsHeading = document.createElement("h1");
                subsHeading.setAttribute("class", "text-white font-weight-bold");
                subsHeading.innerHTML = "Subscribe My Newsletter";
                subsContainerDiv.append(subsHeading);
                // paragraph
                const subsParagraph = document.createElement("p");
                subsParagraph.setAttribute("class", "text-white");
                subsParagraph.innerHTML = "Subscribe and get my latest article in your inbox";
                subsContainerDiv.append(subsParagraph);
                //form start
                const subsForm = document.createElement("form");
                subsForm.setAttribute("class", "form-inline justify-content-center");
                subsContainerDiv.append(subsForm);
                //div input
                const subInputDiv = document.createElement("div");
                subInputDiv.setAttribute("class", "input-group");
                subsForm.append(subInputDiv);
                //input type
                const SubsInput = document.createElement("input");
                SubsInput.setAttribute("type", "text");
                SubsInput.setAttribute("class", "form-control");
                SubsInput.setAttribute("placeholder", "Your Email");
                subInputDiv.append(SubsInput);
                //div
                const subsDivInput = document.createElement("div");
                subsDivInput.setAttribute("class", "input-group-append");
                subInputDiv.append(subsDivInput);
                //button
                const subsbutton = document.createElement("button");
                subsbutton.setAttribute("class", "btn btn-primary");
                subsbutton.setAttribute("type", "submit");
                subsbutton.innerText = "Subscribe";
                subInputDiv.append(subsbutton);

                
            }

        });
        




        


        




    },
    blogList2() {
        const blogListContainerDiv1 = document.createElement("div");
        blogListContainerDiv1.setAttribute("class", "container bg-white pt-5");
        document.getElementById("contantId").append(blogListContainerDiv1);
        /// start loop from here
       
        
        this.blogListImages1.forEach(element => {
            if (element.number < 4) {
    
                const blogListRowDiv1 = document.createElement("div");
                blogListRowDiv1.setAttribute("class", "row blog-item px-3 pb-5");
        
                blogListContainerDiv1.append(blogListRowDiv1);
                //col-md-5
                const blogListColMdDiv = document.createElement("div");
                blogListColMdDiv.setAttribute("class", "col-md-5");
                blogListRowDiv1.append(blogListColMdDiv);
                //image src
                const blogImg = document.createElement("img");
                blogImg.setAttribute("class", "img-fluid mb-4 mb-md-0");
                blogImg.setAttribute("src", element.blogImgSrc);
                blogImg.setAttribute("alt", "image");
                blogListColMdDiv.append(blogImg);
                //col-md-7
                const blogListColMd7Div = document.createElement("div");
                blogListColMd7Div.setAttribute("class", "col-md-7");
                blogListRowDiv1.append(blogListColMd7Div);
                //h3
                const blogListH3 = document.createElement("h3");
                blogListH3.setAttribute("class", "mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold");
                blogListH3.innerText = "Lorem ipsum dolor sit amet";
                blogListColMd7Div.append(blogListH3);
                //div d-flex
                const bolgListDFlexDiv = document.createElement("div");
                bolgListDFlexDiv.setAttribute("class", "d-flex mb-3");
                blogListColMd7Div.append(bolgListDFlexDiv);
                // small 
                const blogListSmall = document.createElement("small");
                blogListSmall.setAttribute("class", "mr-2 text-muted");
                blogListSmall.innerText = `${date}/${month}/${year}`;
                bolgListDFlexDiv.append(blogListSmall);
                // icon i 
                const blogListIcon = document.createElement("i");
                blogListIcon.setAttribute("class", "fa fa-calendar-alt");
                blogListSmall.append(blogListIcon);
                // small 
                const blogListSmall1 = document.createElement("small");
                blogListSmall1.setAttribute("class", "mr-2 text-muted");
                blogListSmall1.innerText = "Web Design";
                bolgListDFlexDiv.append(blogListSmall1);
                // icon i 
                const blogListIcon1 = document.createElement("i");
                blogListIcon1.setAttribute("class", "fa fa-folder");
                blogListSmall1.append(blogListIcon1);
                // small 
                const blogListSmall2 = document.createElement("small");
                blogListSmall2.setAttribute("class", "mr-2 text-muted");
                blogListSmall2.innerText = "15 Comments";
                bolgListDFlexDiv.append(blogListSmall2);
                // icon i 
                const blogListIcon2 = document.createElement("i");
                blogListIcon2.setAttribute("class", "fa fa-comments");
                blogListSmall2.append(blogListIcon2);

                // paragraph 
                const blogListParagraph = document.createElement("p");
                blogListParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero";
                blogListColMd7Div.append(blogListParagraph);
                // readmore anchor tag
                const blogListAnchorTag = document.createElement("a");
                blogListAnchorTag.setAttribute("class", "btn btn-link p-0");
                blogListAnchorTag.setAttribute("href", "");
                blogListAnchorTag.innerText = "Read More";
                blogListColMd7Div.append(blogListAnchorTag);
                // angle icones 
                const blogListAngleIcon = document.createElement("i");
                blogListAngleIcon.setAttribute("class", "fa-angle-right");
                blogListAnchorTag.append(blogListAngleIcon);
            }
        });
}


}
