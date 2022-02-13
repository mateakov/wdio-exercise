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
})