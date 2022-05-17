class Tweet {
  constructor (user, content, link, likes, retweets, replies, replyCount) {
    this.sender = user;
    this.content = content;
    if (link === undefined) {
      this.link = 'no link provided'
    } else {
      this.link = link;
    }
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
  }
  like() {
    this.likes += 1;
  }
  retweet() {
    this.retweets += 1;
  }
  reply(message) {
    this.replies.push(message);
    this.replyCount += 1;
  }
}

module.exports = Tweet;
