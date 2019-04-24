const jwt = require('jsonwebtoken');
const APP_SECRET = 'GraphQL-is-aw3some';

function getUserId(context, throwIfNotFound = true) {
    const auth = context.request.get('Authorization');
    if (auth) {
        const token = auth.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId;
    } else if (throwIfNotFound) {
        throw new Error('Not authenticated');
    }
    return undefined;
}

module.exports = {
    APP_SECRET,
    getUserId,
}
