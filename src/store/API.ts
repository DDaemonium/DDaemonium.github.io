//const apiDomain = "https://ufostore.herokuapp.com/";
const apiDomain = "https://ubackstore.herokuapp.com/";
const apiDomainBackup = "https://ufoback.herokuapp.com/";

/* Global */
async function safeAPICall(requestUrl) {
    const timeout = 1500;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(apiDomain + requestUrl, {
        signal: controller.signal
    }).catch(async _ => await fetch(apiDomainBackup + requestUrl, {
        signal: controller.signal
    }));
    clearTimeout(id);

    return await response.json();
}

export function GetCurrentPage() {
    var pathname = window.location.pathname;
    if (pathname.indexOf('partners') == 1) {
        return 'partners';
    }
    if (pathname.indexOf('products') == 1) {
        return 'products';
    }
    if (pathname.indexOf('categories') == 1) {
        return 'categories';
    }
    if (pathname.indexOf('preview') == 1) {
        return 'productView';
    }
    if (pathname.indexOf('about') == 1) {
        return 'profile';
    }
    return 'products';
}

export async function GetPartners() {
    return await safeAPICall('main/GetPartners');
}

export async function GetCategories(parentId) {
    return await safeAPICall('main/GetCategories?parentId=' + (parentId ? parentId : 'null'));
}

export async function GetParentCategory(ids) {
    return await safeAPICall('main/GetCategoriesByIds?ids=' + (ids ? ids : 'null'));
}

export async function GetProduct(id, name) {
    return await GetProductGS(id, name);
    // return await safeAPICall('main/GetProduct?article=' + (id ? id : '7409903') + '&name=' + name);
}

export async function SearchProducts(query, p, tid, pid, cnt = 30) {
    //return await safeAPICall('main?query=' + (query ? query : '') + '&p=' + p + '&tid=' + (tid ? tid : '') + '&pid=' + (pid ? pid : ''));
    return await SearchGS((query ? query : ''), p, tid, pid, cnt);
}

async function GetPartnerById(pid) {
    return await safeAPICall('main/GetPartnerById?partnerId=' + (pid ? pid : ''));
}

async function SearchGS(query, p, tid, pid, cnt): Promise<IProductListResult | null> {
    let gdeslnRequest = "https://api.gdeslon.ru/api/search.xml?q=" + query + "&p=" + p + "&l=" + cnt;
    if (tid) {
        gdeslnRequest += "&tid=" + tid;
    }
    if (pid) {
        gdeslnRequest += "&pid=" + pid;
    }
    gdeslnRequest += "&_gs_at=3336a0c187d9d32976ff76d52808092d758f2b4a";
    let response = fetch(gdeslnRequest);
    return response.then(async resp => {
        if (resp.ok) {
            const xmlResult = await resp.text();
            
            if (!xmlResult) {
                return null;
            }

            if (!window.DOMParser) {
                return null;
            }

            let parser = new DOMParser();
            let doc = parser.parseFromString(xmlResult, "text/xml");
            const foundCount = doc.getElementsByTagName("documents_number")[0]?.childNodes[0]?.nodeValue;
           
            if (!foundCount) {
                return { foundCount: 0, products: null};
            }
            let offers = doc.getElementsByTagName("offers")[0]
                .getElementsByTagName("offer");
            let products: IProduct[] = [];
            for (let i = 0; i < offers.length; ++i) {
                let offer = offers[i];
                
                try {
                    products.push(
                        {
                            article: offer?.getAttribute("article")?.valueOf(),
                            price: offer?.getElementsByTagName("price")[0]?.childNodes[0]?.nodeValue,
                            name: offer?.getElementsByTagName("name")[0]?.childNodes[0]?.nodeValue,
                            partnerName: null,
                            categoryId: offer?.getAttribute("gs_category_id")?.valueOf(),
                            categoryName: null,
                            partnerId: offer?.getElementsByTagName("merchant_id")[0]?.childNodes[0]?.nodeValue,
                            description: offer?.getElementsByTagName("description")[0]?.childNodes[0]?.nodeValue,
                            charge: offer?.getElementsByTagName("charge")[0]?.childNodes[0]?.nodeValue,
                            referalLink: offer?.getElementsByTagName("url")[0]?.childNodes[0]?.nodeValue,
                            imgUrl: offer?.getElementsByTagName("original_picture")[0]?.childNodes[0]?.nodeValue,
                            originalImgUrl: offer?.getElementsByTagName("original_picture")[0]?.childNodes[0]?.nodeValue,
                            isAvailable: offer?.getAttribute("available")?.valueOf() == "true",
                            vendor: offer?.getElementsByTagName("vendor")[0]?.childNodes[0]?.nodeValue,
                            model: offer?.getElementsByTagName("model")[0]?.childNodes[0]?.nodeValue
                        }
                    );
                }
                catch (e) {
                    console.log(e);
                }
            }
            
            return { foundCount: foundCount, products: products };
        }
        else {
            return null;
        }
    }).catch(_ => null);
}

async function GetProductGS(id, name): Promise<IProduct | null> {
    let gdeslnRequest = "";
    if (!name) {
        gdeslnRequest = "https://api.gdeslon.ru/api/search.xml?l=10&articles=" + id +"&_gs_at=3336a0c187d9d32976ff76d52808092d758f2b4a";
    }
    else {
        const normalizedName = name.replaceAll("\"", "").replaceAll("'", "");
        gdeslnRequest = "https://api.gdeslon.ru/api/search.xml?l=10&q=" + normalizedName + "&_gs_at=3336a0c187d9d32976ff76d52808092d758f2b4a";
    }
    let response = fetch(gdeslnRequest);
    return response.then(async resp => {
        if (resp.ok) {
            const xmlResult = await resp.text();
            
            if (!xmlResult) {
                return null;
            }

            if (!window.DOMParser) {
                return null;
            }

            let parser = new DOMParser();
            let doc = parser.parseFromString(xmlResult, "text/xml");
            let offers = doc.getElementsByTagName("offers")[0]
                .getElementsByTagName("offer");
            let offer: Element = offers[0];
            for (let i = 0; i < offers.length; ++i) {
                if (offers[i].getAttribute("article")?.valueOf() == id) {
                    offer = offers[i];
                    break;
                }
            }
            
            if (!offer && offers.length > 0) {
                offer = offers[0];
            }
            
            else if (!offer) {
                return null;
            }
            
            const partner = await GetPartnerById(offer?.getElementsByTagName("merchant_id")[0]?.childNodes[0]?.nodeValue);
            const category = await GetParentCategory(offer?.getAttribute("gs_category_id")?.valueOf());
            return {
                article: offer?.getAttribute("article")?.valueOf(),
                price: offer?.getElementsByTagName("price")[0]?.childNodes[0]?.nodeValue,
                name: offer?.getElementsByTagName("name")[0]?.childNodes[0]?.nodeValue,
                partnerName: partner?.name,
                categoryId: offer?.getAttribute("gs_category_id")?.valueOf(),
                categoryName: category[0]?.name,
                partnerId: offer?.getElementsByTagName("merchant_id")[0]?.childNodes[0]?.nodeValue,
                description: offer?.getElementsByTagName("description")[0]?.childNodes[0]?.nodeValue,
                charge: offer?.getElementsByTagName("charge")[0]?.childNodes[0]?.nodeValue,
                referalLink: offer?.getElementsByTagName("url")[0]?.childNodes[0]?.nodeValue,
                imgUrl: offer?.getElementsByTagName("original_picture")[0]?.childNodes[0]?.nodeValue,
                originalImgUrl: offer?.getElementsByTagName("original_picture")[0]?.childNodes[0]?.nodeValue,
                isAvailable: offer?.getAttribute("available")?.valueOf() == "true",
                vendor: offer?.getElementsByTagName("vendor")[0]?.childNodes[0]?.nodeValue,
                model: offer?.getElementsByTagName("model")[0]?.childNodes[0]?.nodeValue
            };
        } else {
            return null;
        }
    }).catch(_ => null);
}

export interface IProduct {

    /// Уникальный id продукта (артикул)

    article: any,

    /// Название продукта

    name: any,

    /// Реферальная ссылка на товар

    referalLink: any,

    /// Имя партнёра

    partnerName: any,

    /// Стоимость

    price: any,

    /// Кэшбэк

    charge: any,

    /// Описание

    description: any,

    /// Ссылка на изображение товара

    imgUrl: any,

    /// Ссылка на изображение товара

    originalImgUrl: any,

    /// Есть в наличии?

    isAvailable: boolean,

    /// Производитель

    vendor: any,

    /// Id партнёра

    partnerId: any,

    /// Id категории

    categoryId: any,

    /// Нзвание категории

    categoryName: any,

    /// Модель

    model: any,
}

interface IProductListResult {
    foundCount: any,
    products : IProduct[] | null
}
