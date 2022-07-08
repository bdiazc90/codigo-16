class User {
    constructor(_username) {
        this.username = _username;
        this.created_at = new Date();
        
        this.attempts = 0;
        this.success_attempts = 0;
        this.failed_attempts = 0;
        this.score = 0;
    }
}