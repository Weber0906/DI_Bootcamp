class Video {
    constructor (title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}

const video1 = new Video("Funny Cats", "user123", 300);
video1.watch();

const video2 = new Video("Dancing Monkeys", "user1234", 200);
video2.watch();

// bonus

const videoData = [
    ["Funny Cats", "user123", 300],
    ["Dancing Monkeys", "user456", 200],
    ["Adventures of Indiana Johnes", "user789", 600],
    ["Cooking recipes", "userabc", 400],
    ["Car racing", "userxyz", 250]
  ];

const videos = videoData.map(([title, uploader, time]) => new Video(title, uploader, time));

videos.forEach(video => video.watch())