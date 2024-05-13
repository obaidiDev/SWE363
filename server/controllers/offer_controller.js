const Offer = require('../models/db_schema').Offer;

async function getOfferById(offerId){
    return await Offer.fineOne({_id: offerId});
}

async function removeOfferById(offerId){
    return await Offer.deleteOne({_id: offerId});
}
async function makeOffer(offerData){
    return await Offer.create({offerData});
}

async function acceptOffer(offerId){
    const offer = await getOfferById(offerId);
    return await offer.save({accepted: true});
}

async function offerFrom(offerId){
    return (await getOfferById(offerId)).from
}

async function offerTo(offerId){
    return (await getOfferById(offerId)).to
}