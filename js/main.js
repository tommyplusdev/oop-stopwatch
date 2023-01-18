// Create a Stopwatch with OOP principles.

// const sw = new Stopwatch();

// sw.duration
// sw.reset()
// sw.start()
// sw.stop()

// 4 'members' of the Stopwatch object

// Throw an error when start or stop is done twice in a row (already started or not yet started)

// Duration is in seconds

// Start and stop should enable / disable duration timer.

function Stopwatch() {
    let startTime,
    endTime,
    duration = 0;
    let running = false;
    
    this.start = function() {
        if (running) {
            throw new Error("Stopwatch already running.")
        }
        startTime = new Date();
        running = true;
    }

    this.stop = function() {
        if (!running) {
            throw new Error("Stopwatch already stopped.")
        }
        endTime = new Date();
        // get the seconds by converting the Date object to milliseconds with .getTime()
        seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds; // stop shouldn't reset the timer, so it's added to the duration.
    }
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
    // retrieve the internal duration value
    Object.defineProperty(this, "duration", {
        get: function() {
            return duration;
        },
    })
}

