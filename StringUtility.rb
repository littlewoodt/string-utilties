##################################### this is how i would have done it #######################
# but its saying undefined method when I call it

class StringUtility

	def capitalize(arr)
		arr.each do |arr|
			arr.capitalize!
		end
	end

end

a = ["this", "is", "an", "array", "of", "strings"]
StringUtility.capitalize(a)


#############################################################################################
# and using self as yours, but its saying undefined method when I call it

class StringUtility

	def self.capitalize(arr)
		arr.each do |arr|
			arr.capitalize!
		end
	end

end

a = ["this", "is", "an", "array", "of", "strings"]
StringUtility.capitalize(a)


#############################################################################################
# it works like this 

a = ["this", "is", "an", "array", "of", "strings"]
a.each do |arr|
	arr.capitalize!
end