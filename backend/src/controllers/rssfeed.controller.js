import RSSParser from "rss-parser";
import dotenv from "dotenv";

dotenv.config();
const parser = new RSSParser({
    customFields: {
        item: ['title','pubDate', 'description','guid','link','media:content',],
      }
});

export const getAllRssfeed = async (req, res) => {
    const feed = await parser.parseURL(process.env.FEED_URL);
    feed.length = feed.items.length;
    res.status(200).send(feed);
};

export const getRssFeed = async (req,res) => {
    
}

