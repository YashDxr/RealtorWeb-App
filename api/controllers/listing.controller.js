import Listing from "../models/listing.model.js";
import { customErrors } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(customErrors(401, "Listing not found"));
  }
  if (req.user.id !== listing.userRef) {
    return next(customErrors(401, "Unauthorized Access"));
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing deleted successfully");
  } catch (error) {
    next(error);
  }
};
