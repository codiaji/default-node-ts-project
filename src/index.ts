const user = {
	id: 123,
	admin: false,
	becomeAdmin: function () {
		this.admin = true;
	},
};

//...
interface DB {
	filterUsers(filter: (this: User) => boolean): User[];
}
const db = getDB();
const admins = db.filterUsers(function (this: User) {
	return this.admin;
});
// don't use arrow function, It won't work
// const admins = db.filterUsers(() => this.admin);
