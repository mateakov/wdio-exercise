describe('Open Mono Website', () => {
    it('Proper title is displayed', async () => {
        browser.setWindowSize(1500, 1500);
        await browser.url('https://www.mono.hr/');
        const title = await $('.hero__title');
        await expect(title).toBeDisplayed();
    })

    it('Mono novosti', async () => {
        const button = await $('#lnkBlog');
        await button.click();
        const pElement = await $('.type --medium');
        await pElement.isExisting();
    })

    it ('Mono engleski', async () => {
        const Eng= await $('[href="http://mono.software"]');
        await Eng.click();
        const arcButton = await $ ('a=See all articles');
        await arcButton.scrollIntoView(); 
        await browser.pause(2000);        
    })

    it ('Mono services', async () => {
        const serv = await $('[href="javascript:void(0)"]');
        await serv.click();
        const develop = await $('[href="/services/custom-software-development/"]');
        await develop.click();

    })
    
    it('Iterating', async () => {
        const iterating = await $('.spc--top--med');
        await iterating.scrollIntoView();
        await browser.pause(3000);
    })



   // it ('')

    // it('Artworks menu button', async () => {
    //     await browser.url('https://www.anita-kontrec.com/');
    //     const myButton = await $('a=Artworks');
    //     await myButton.click();
    //     const elem = await $('.footer-widgets-outer-wrapper');
    //     await elem.scrollIntoView();
    // })

    // it('Artworks hrvatski jezik (Radovi)', async () => {
    //     await browser.url('https://www.anita-kontrec.com/artworks');
    //     const myButton = await $('[alt="Hrvatski"]');
    //     await myButton.click();
    //     const elem = await $('h1=Radovi');
    //     await elem.isExisting();
    // });

    // it('Publikacije menu button', async () => {
    //     const myButton = await $('a=Publikacije');
    //     await myButton.click();
    //     const elem = await $('.wp-block-button__link=PUBLIkacije');
    //     await elem.scrollIntoView();
    //     await elem.isExisting();
    // });

    // it('Opening Image Gallery View opening - O meni', async () => {
    //     const myButton = await $('a=o meni');
    //     await myButton.click();

    //     const button2 = await $('.fancybox');
    //     await button2.click();

    //     const elem = await $('.fancybox-img');
    //     await elem.isExisting();
    // });


})
